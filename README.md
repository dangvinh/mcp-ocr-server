# MCP OCR Server

[![Build Status](https://github.com/dangvinh/mcp-ocr-server/actions/workflows/ci.yml/badge.svg)](https://github.com/dangvinh/mcp-ocr-server/actions/workflows/ci.yml)
[![Codecov](https://codecov.io/gh/dangvinh/mcp-ocr-server/branch/main/graph/badge.svg)](https://codecov.io/gh/dangvinh/mcp-ocr-server)

**MCP server for OCR using native Tesseract (C++), built with Node.js, delivering high-performance OCR and integrable with ChatGPT Desktop.**

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

## 🛠 Installation

### 1. Install Tesseract OCR

#### macOS

```bash
brew install tesseract
# Optional: install additional languages
brew install tesseract-lang
```

#### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install tesseract-ocr libtesseract-dev libleptonica-dev
# Optional: install Vietnamese language
sudo apt install tesseract-ocr-vie
```

#### Windows

- Download installer from [Tesseract OCR GitHub](https://github.com/tesseract-ocr/tesseract)
- Or using Chocolatey:

```powershell
choco install tesseract
```

- Add the installation path to your `PATH` environment variable.

### 2. Clone the repository

```bash
git clone https://github.com/dangvinh/mcp-ocr-server.git
cd mcp-ocr-server/cpp
```

### 3. Build the project with CMake

The C++ OCR engine is in the `cpp/` folder. Follow these steps:

#### Step 1: Navigate to the C++ source folder

```bash
cd cpp
```

#### Step 2: Create a build directory

```bash
mkdir build
cd build
```

#### Step 3: Configure the project with CMake

```bash
# Standard configuration (Tesseract installed system-wide)
cmake ..
```

- If Tesseract or Leptonica are installed in a custom location, specify their paths:

```bash
cmake -DTesseract_DIR=/path/to/tesseract \
      -DLeptonica_DIR=/path/to/leptonica ..
```

#### Step 4: Build the library and CLI tool

```bash
cmake --build .
```

- This will build:
  - `libmcp_ocr.a` static library
  - `ocr_cli` executable in `cpp/build/bin` (or equivalent)

#### Step 5: Run tests with CTest / GoogleTest

```bash
# From the build directory
ctest --verbose
```

- This will run all GoogleTest-based tests.
- Ensure test images or resources exist in `cpp/tests` or `examples/`.
- The setup works cross-platform (macOS, Linux, Windows).

---

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

3. For other languages, download the corresponding `.traineddata` files into `tessdata/`.

4. Ensure your `.env` or `.env.example` has:

```
TESSDATA_PREFIX=./tessdata
OCR_LANG=eng
```

---

### 4. Run OCR CLI

```bash
./ocr_cli path/to/image.png output.txt
```

> Ensure the `tessdata` folder is accessible for language files. The project supports macOS, Linux, and Windows (cross-platform).
