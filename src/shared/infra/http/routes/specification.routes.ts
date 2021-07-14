import { Router } from 'express';

import { CreateSpecificationsController } from '@modules/cars/useCases/createSpecification/CreateSpecificationsController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecifications/ListSpecificationsController';

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated"
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';

const specificationsRoutes = Router();


const createSpecificationsController = new CreateSpecificationsController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post("/", ensureAuthenticated, ensureAdmin, createSpecificationsController.handle);
specificationsRoutes.get("/", listSpecificationsController.handle);

export { specificationsRoutes };
