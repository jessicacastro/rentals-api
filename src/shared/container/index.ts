import { container } from 'tsyringe';
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { ICategoriesRepository } from '../../modules/cars/repositories/implementations/ICategoriesRepository';



/**
 * Passaremos nossa Interface e daremos um nome para esse registro
 */
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);
