/**
 * Post-build script: prepare LibreOffice WASM assets
 * 
 * Problem: soffice.wasm (~147MB) and soffice.data (~100MB) exceed GitHub's 
 * 100MB file size limit, so only .gz compressed versions are committed to Git.
 * 
 * Default solution: keep only compressed files in out/. The app's asset loader
 * can fetch .gz files or .gz chunks and decompress them in the browser. This
 * avoids publishing both compressed and uncompressed copies.
 *
 * Set KEEP_UNCOMPRESSED_WASM=true to also emit soffice.wasm and soffice.data
 * for servers that cannot rely on browser-side gzip decompression.
 */

import { createReadStream, createWriteStream, readdirSync, existsSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

const BASE_PATH = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || '';
const CLEAN_BASE_PATH = BASE_PATH.startsWith('/') ? BASE_PATH.slice(1) : BASE_PATH;

const WASM_DIR_STANDARD = join(process.cwd(), 'out', 'libreoffice-wasm');
const WASM_DIR_SUBPATH = CLEAN_BASE_PATH ? join(process.cwd(), 'out', CLEAN_BASE_PATH, 'libreoffice-wasm') : null;

const WASM_DIR = (WASM_DIR_SUBPATH && existsSync(WASM_DIR_SUBPATH)) ? WASM_DIR_SUBPATH : WASM_DIR_STANDARD;
const KEEP_UNCOMPRESSED = process.env.KEEP_UNCOMPRESSED_WASM === 'true';

async function decompressFile(gzPath, outPath) {
    const gunzip = createGunzip();
    const source = createReadStream(gzPath);
    const destination = createWriteStream(outPath);
    await pipeline(source, gunzip, destination);
}

async function main() {
    if (process.env.DOCKER_BUILD === 'true') {
        console.log('[postbuild] DOCKER_BUILD detected, skipping decompression.');
        return;
    }

    if (!existsSync(WASM_DIR)) {
        console.log('[postbuild] No libreoffice-wasm directory found in out/, skipping.');
        return;
    }

    const dirFiles = readdirSync(WASM_DIR);
    const files = dirFiles.filter(f => f.endsWith('.gz'));

    if (files.length === 0 && !dirFiles.some(f => f.endsWith('.gz.manifest.json'))) {
        console.log('[postbuild] No .gz files found in out/libreoffice-wasm/, skipping.');
        return;
    }

    if (!KEEP_UNCOMPRESSED) {
        let removed = 0;
        const compressedTargets = new Set(
            dirFiles
                .filter(file => file.endsWith('.gz') || file.endsWith('.gz.manifest.json') || file.includes('.gz.part_'))
                .map(file => file.replace(/\.gz(?:\.manifest\.json|\.part_\d+)?$/, ''))
        );

        for (const outFile of compressedTargets) {
            for (const file of dirFiles) {
                const isUncompressedDuplicate = file === outFile ||
                    file === `${outFile}.manifest.json` ||
                    file.startsWith(`${outFile}.part_`);

                if (isUncompressedDuplicate) {
                    unlinkSync(join(WASM_DIR, file));
                    removed++;
                    console.log(`[postbuild]   Removed uncompressed duplicate ${file}.`);
                }
            }
        }

        console.log(`[postbuild] Keeping compressed LibreOffice WASM assets only (${removed} duplicate file(s) removed).`);
        return;
    }

    console.log(`[postbuild] Decompressing ${files.length} WASM .gz file(s)...`);

    for (const gzFile of files) {
        const gzPath = join(WASM_DIR, gzFile);
        const outFile = gzFile.replace(/\.gz$/, '');
        const outPath = join(WASM_DIR, outFile);

        // Skip if already decompressed
        if (existsSync(outPath)) {
            const gzStat = statSync(gzPath);
            const outStat = statSync(outPath);
            // If decompressed file is larger than gz, it's likely already good
            if (outStat.size > gzStat.size) {
                console.log(`[postbuild]   ${outFile} already exists (${(outStat.size / 1024 / 1024).toFixed(1)}MB), skipping.`);
                continue;
            }
        }

        try {
            const gzStat = statSync(gzPath);
            console.log(`[postbuild]   Decompressing ${gzFile} (${(gzStat.size / 1024 / 1024).toFixed(1)}MB)...`);
            await decompressFile(gzPath, outPath);
            const outStat = statSync(outPath);
            console.log(`[postbuild]   → ${outFile} (${(outStat.size / 1024 / 1024).toFixed(1)}MB)`);
        } catch (err) {
            console.error(`[postbuild]   Failed to decompress ${gzFile}:`, err.message);
        }
    }

    console.log('[postbuild] WASM decompression complete.');
}

main().catch(err => {
    console.error('[postbuild] Error:', err);
    // Don't fail the build if decompression fails
    process.exit(0);
});
