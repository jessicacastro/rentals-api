import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";
import swaggerUI from 'swagger-ui-express';

import './database';

import "./shared/container";

import { AppError } from './error/AppError';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.get('/', (request, response) => response.json({ message: 'API works! Go code!' }));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal Server Error - ${err.message}`
  });
});


app.listen(3333, () => {
  console.log('Server listening on http://localhost:3333');
});
