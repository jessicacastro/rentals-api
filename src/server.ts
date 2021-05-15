import express from 'express';
import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);

app.get('/', (request, response) => response.json({ message: 'API works! Go code!' }));


app.listen(3333, () => {
  console.log('Server listening on http://localhost:3333');
});
