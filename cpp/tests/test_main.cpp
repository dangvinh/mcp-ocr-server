#include <gtest/gtest.h>
#include "../include/ocr.h"

class OcrEngineTest : public ::testing::Test
{
protected:
  void SetUp() override
  {
    ocrEngine = new ocr::OcrEngine();
  }

  void TearDown() override
  {
    delete ocrEngine;
  }

  ocr::OcrEngine *ocrEngine;
};

// Dummy test to verify OCR engine initialization
TEST_F(OcrEngineTest, Initialization)
{
  ASSERT_NE(ocrEngine, nullptr); // OCR engine should not be null
}

// Example test for recognize function
TEST_F(OcrEngineTest, RecognizeEmptyImage)
{
  std::string result = ocrEngine->recognize("");
  ASSERT_EQ(result, "Recognized text from ");
}

// Example test for recognizing sample image
TEST_F(OcrEngineTest, RecognizeSampleImage)
{
  std::string imagePath = "../../examples/sample1.png";
  std::string result = ocrEngine->recognize(imagePath);

  std::string expectedText = "Recognized text from " + imagePath;
  ASSERT_EQ(result, expectedText);
}

int main(int argc, char **argv)
{
  ::testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
