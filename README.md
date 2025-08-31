# MCP OCR Server

**MCP server for OCR using native Tesseract (C++), built with Node.js, delivering up to 10x faster performance than tesseract.js and integrable with ChatGPT Desktop.**

🚧 Work in Progress 🚧

## ✨ Features (planned)

- High-performance OCR via native Tesseract (C++)
- Node.js MCP server wrapper for easy integration
- Compatible with ChatGPT Desktop and other MCP clients
- Benchmark vs tesseract.js

## 📌 Roadmap

- [ ] Step 1: C++ OCR CLI tool
- [ ] Step 2: Node.js MCP server wrapper
- [ ] Step 3: ChatGPT Desktop configuration guide
- [ ] Step 4: Benchmark results
- [ ] Step 5: Demo video

## 🔧 Tech Stack

- C++ (Tesseract OCR)
- Node.js + TypeScript (@modelcontextprotocol/sdk)
- JSON-RPC 2.0 (MCP standard)

## 🗂 Setup tessdata

The OCR engine requires trained data files to work. Please follow these steps:

1. Create a `tessdata` folder in the project root:

```bash
mkdir tessdata
```

2. Download the English trained data:

```bash
wget https://github.com/tesseract-ocr/tessdata/raw/main/eng.traineddata -P tessdata/
```

3. If you want to use other languages, download the corresponding `.traineddata` files and place them in the `tessdata/` folder.

4. Ensure your `.env` or `.env.example` has:

```
TESSDATA_PREFIX=./tessdata
OCR_LANG=eng
```

Stay tuned!
