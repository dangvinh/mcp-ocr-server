import * as path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

interface OcrAddon {
  recognize(imagePath: string): Promise<string>;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create require function in ES module
const requireCJS = createRequire(import.meta.url);

let ocrAddon: OcrAddon | null = null;
export async function loadOcrAddon(): Promise<OcrAddon | null> {
  if (ocrAddon) {
    return ocrAddon;
  }

  try {
    ocrAddon = await requireCJS(path.resolve(__dirname, '../../build/Release/ocr_addon.node'));
    return ocrAddon;
  } catch (err) {
    console.error('Failed to load OCR addon:', err);
    throw err;
  }
}

/**
 * Recognize text from the given image path by calling the native C++ addon asynchronously.
 * @param imagePath - Path to the image file.
 * @returns Promise resolving to recognized text.
 */
export async function recognizeText(imagePath: string): Promise<string> {
  console.log(`Starting OCR recognition for image: ${imagePath}`);

  try {
    const addon = await loadOcrAddon();

    if (!addon) {
      throw new Error('OCR addon is not loaded.');
    }

    const recognizedText = await addon.recognize(imagePath);

    console.log(`OCR recognition completed for image: ${imagePath}`);
    return recognizedText;
  } catch (err) {
    console.error(`OCR recognition failed for image: ${imagePath}`, err);
    // TODO: Consider logging the error to a monitoring system
    return '[OCR failed]';
  }
}
