# Build OCR tool
# Usage: make

CXX = g++
CXXFLAGS = -Wall -O2
LDFLAGS = `pkg-config --cflags --libs tesseract lept`

all: ocr_tool

ocr_tool: ocr_tool.cpp
	$(CXX) $(CXXFLAGS) -o ocr_tool ocr_tool.cpp $(LDFLAGS)

clean:
	rm -f ocr_tool
