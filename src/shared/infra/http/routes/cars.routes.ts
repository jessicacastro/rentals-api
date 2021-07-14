import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';

import multer from 'multer';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';


const carsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCarsController = new CreateCarController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarsController.handle);



export { carsRoutes };
