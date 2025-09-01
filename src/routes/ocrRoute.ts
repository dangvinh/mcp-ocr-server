import { Router } from 'express';

import { OcrController } from '../controllers/ocrController';

const ocrRouter = Router();

/**
 * Route: POST /ocr
 * Description: Receives an image and returns recognized text using OCR.
 */
ocrRouter.post('/', OcrController.recognizeText);

export default ocrRouter;
