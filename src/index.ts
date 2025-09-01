import express from 'express';

import ocrRouter from './routes/ocrRoute';

const app = express();
app.use(express.json());

app.use('/ocr', ocrRouter);

const startServer = (): void => {
  const port = process.env.PORT ?? 3000;
  const server = app.listen(port, (): void => {
    console.log(`OCR server running at http://localhost:${port}`);
  });

  // Graceful shutdown to handle Ctrl+C / SIGTERM
  const shutdown = (): void => {
    console.log('Shutting down server gracefully...');
    server.close((): void => {
      console.log('Server stopped.');
      process.exit(0);
    });
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
