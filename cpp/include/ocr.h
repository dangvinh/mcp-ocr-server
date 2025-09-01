#pragma once

#include <string>

namespace ocr
{

  class OcrEngine
  {
  public:
    // Constructor
    OcrEngine();

    // Destructor
    ~OcrEngine();

    /**
     * Preprocess the input image before OCR.
     * Example: grayscale, threshold, noise removal, resizing, etc.
     * @param imagePath Path to the input image file
     * @return Path or buffer of the processed image
     */
    std::string processImage(const std::string &imagePath);

    /**
     * Perform OCR on the processed image.
     * This function extracts text from an image.
     * @param imageData Path or buffer of the processed image
     * @return Recognized text as std::string
     */
    std::string recognize(const std::string &imageData);
  };

}
