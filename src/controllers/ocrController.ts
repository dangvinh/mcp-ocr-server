import type { Request, Response } from 'express';

import { recognizeText } from '../core/ocr';

export class OcrController {
  /**
   * Temporary endpoint for testing the C++ OCR core.
   * TODO: Replace sample image with actual uploaded file from request.
   */
  public static async recognizeText(_req: Request, res: Response): Promise<void> {
    try {
      // Use a sample image for testing purposes
      const sampleImagePath = '../../examples/sample1.png';

      const result = await recognizeText(sampleImagePath);

      res.json({ text: result });
    } catch (error) {
      console.error('Error during OCR recognition:', error);
      res.status(500).json({ error: 'Failed to process image' });
    }
  }
}
