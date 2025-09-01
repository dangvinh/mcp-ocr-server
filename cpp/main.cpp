#include "ocr.h"
#include <iostream>
#include <vector>
#include <string>

int main(int argc, char *argv[])
{
  if (argc < 2)
  {
    std::cerr << "Usage: " << argv[0] << " <image1> [image2 ...]" << std::endl;
    return 1;
  }

  ocr::OcrEngine engine;

  for (int i = 1; i < argc; ++i)
  {
    const std::string imagePath = argv[i];
    try
    {
      std::string result = engine.recognize(imagePath);
      std::cout << "OCR result for " << imagePath << ": " << result << std::endl;
    }
    catch (const std::exception &e)
    {
      std::cerr << "Failed to process " << imagePath << ": " << e.what() << std::endl;
    }
  }

  return 0;
}
