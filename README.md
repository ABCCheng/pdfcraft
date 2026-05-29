# PDFCraft

PDFCraft is a browser-based PDF toolkit built with Next.js. It provides private, client-side tools for merging, splitting, compressing, converting, editing, signing, and securing PDF files.

- Website: https://pdfcraft.effortgo.xyz
- Repository: https://github.com/ABCCheng/pdfcraft
- License: AGPL-3.0

## Features

- Client-side PDF processing; files stay on the user's device.
- 99+ PDF tools across editing, conversion, organization, optimization, and security.
- Internationalized UI with locale-aware routes.
- Static export support for simple hosting.
- WASM-powered document and PDF processing.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- next-intl
- pdf-lib, PDF.js, QPDF WASM, LibreOffice WASM, PyMuPDF/Pyodide
- Zustand
- Vitest

## Getting Started

Use Yarn for dependency management.

```bash
git clone https://github.com/ABCCheng/pdfcraft.git
cd pdfcraft
yarn install
yarn dev
```

Open http://localhost:3000.

## Scripts

```bash
yarn dev
yarn build
yarn start
yarn lint
yarn test
yarn test:watch
yarn test:coverage
```

## Deployment

The project builds as a static Next.js export.

```bash
yarn build
```

The production domain is:

```text
https://pdfcraft.effortgo.xyz
```

## Attribution

This repository is forked from [PDFCraftTool/pdfcraft](https://github.com/PDFCraftTool/pdfcraft).

I sincerely thank the original author and contributors for creating PDFCraft and making it available as open source. This repository builds on their work with adjustments for my own deployment and maintenance needs.

Original project: https://github.com/PDFCraftTool/pdfcraft

PDFCraft is maintained for the `ABCCheng/pdfcraft` repository.
