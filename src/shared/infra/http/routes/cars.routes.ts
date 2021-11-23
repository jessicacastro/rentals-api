import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';


const carsRoutes = Router();

const createCarsController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post('/', ensureAuthenticated, ensureAdmin, createCarsController.handle);
carsRoutes.get('/available', listAvailableCarsController.handle);



export { carsRoutes };
