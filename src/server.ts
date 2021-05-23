import express from 'express';

import swaggerUI from 'swagger-ui-express';

import swaggerFile from './swagger.json';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.get('/', (request, response) => response.json({ message: 'API works! Go code!' }));


app.listen(3333, () => {
  console.log('Server listening on http://localhost:3333');
});
