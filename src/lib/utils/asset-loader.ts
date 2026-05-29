/**
 * src/lib/utils/asset-loader.ts
 * 
 * General-purpose utility to fetch and reassemble chunked assets.
 * Used to bypass 25MB file size limits on platforms like Cloudflare Pages.
 */

interface ChunkManifest {
    filename: string;
    chunks: number;
    totalSize: number;
    chunkSize: number;
}

function getMimeType(url: string): string {
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('.wasm')) return 'application/wasm';
    if (lowerUrl.includes('.js')) return 'application/javascript';
    if (lowerUrl.includes('.ttf')) return 'font/ttf';
    if (lowerUrl.includes('.otf')) return 'font/otf';
    if (lowerUrl.includes('.woff2')) return 'font/woff2';
    return 'application/octet-stream';
}

async function fetchChunkedBlob(baseUrl: string, queryString: string): Promise<Blob | null> {
    const manifestUrl = `${baseUrl}.manifest.json${queryString}`;
    const manifestRes = await fetch(manifestUrl);

    if (!manifestRes.ok) {
        return null;
    }

    const manifest: ChunkManifest = await manifestRes.json();
    console.log(`[asset-loader] Manifest found for ${manifest.filename}. Reassembling from ${manifest.chunks} chunks...`);

    const chunkPromises: Promise<ArrayBuffer>[] = [];
    for (let i = 0; i < manifest.chunks; i++) {
        const chunkUrl = `${baseUrl}.part_${i}${queryString}`;
        chunkPromises.push(
            fetch(chunkUrl).then(res => {
                if (!res.ok) throw new Error(`Failed to fetch chunk ${i} for ${baseUrl}`);
                return res.arrayBuffer();
            })
        );
    }

    const chunks = await Promise.all(chunkPromises);
    const assembled = new Uint8Array(manifest.totalSize);
    let offset = 0;
    for (const chunk of chunks) {
        assembled.set(new Uint8Array(chunk), offset);
        offset += chunk.byteLength;
    }

    return new Blob([assembled], { type: getMimeType(baseUrl) });
}

async function fetchDirectBlob(url: string, mimeSource: string): Promise<Blob | null> {
    const response = await fetch(url);
    if (!response.ok) {
        return null;
    }

    const blob = await response.blob();
    return blob.type ? blob : new Blob([blob], { type: getMimeType(mimeSource) });
}

async function decompressGzipBlob(blob: Blob, mimeSource: string): Promise<Blob> {
    if (typeof DecompressionStream === 'undefined') {
        throw new Error('This browser cannot decompress gzip assets. Use a server that supports gzip_static or enable KEEP_UNCOMPRESSED_WASM=true during build.');
    }

    const stream = blob.stream().pipeThrough(new DecompressionStream('gzip'));
    const decompressed = await new Response(stream).blob();
    return new Blob([decompressed], { type: getMimeType(mimeSource) });
}

/**
 * Fetches an asset, potentially reassembling it from chunks if a manifest exists.
 * @param url The base URL of the asset (e.g., /libreoffice-wasm/soffice.wasm)
 * @returns A Blob containing the reassembled or directly fetched asset
 */
export async function fetchAssembledBlob(url: string): Promise<Blob> {
    // Determine the manifest URL by stripping query parameters and appending .manifest.json
    const [baseUrl, query] = url.split('?');
    const queryString = query ? `?${query}` : '';

    try {
        const chunkedBlob = await fetchChunkedBlob(baseUrl, queryString);
        if (chunkedBlob) {
            return chunkedBlob;
        }
    } catch (err) {
        console.debug(`[asset-loader] Chunked fetch failed or skipped for ${url}:`, err);
    }

    const directBlob = await fetchDirectBlob(url, baseUrl);
    if (directBlob) {
        return directBlob;
    }

    const gzipBaseUrl = `${baseUrl}.gz`;
    try {
        const gzipChunkedBlob = await fetchChunkedBlob(gzipBaseUrl, queryString);
        if (gzipChunkedBlob) {
            return decompressGzipBlob(gzipChunkedBlob, baseUrl);
        }
    } catch (err) {
        console.debug(`[asset-loader] Chunked gzip fetch failed or skipped for ${url}:`, err);
    }

    const gzipBlob = await fetchDirectBlob(`${gzipBaseUrl}${queryString}`, baseUrl);
    if (gzipBlob) {
        return decompressGzipBlob(gzipBlob, baseUrl);
    }

    throw new Error(`Failed to fetch asset: ${url}`);
}
