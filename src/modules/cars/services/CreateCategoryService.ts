import { ICategoriesRepository } from "../repositories/categories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * @param categoriesRepository
 * Serviço responsável por chamar o repositório e rodar seus métodos para criar a category.
 */
class CreateCategoryService {
  constructor(
    private categoriesRepository: ICategoriesRepository
  ) {};

  execute({ name, description }: IRequest): void {
    const checkIfCategorExists = this.categoriesRepository.findByName(name);

    if (checkIfCategorExists) throw new Error('Category alread exists!');

    this.categoriesRepository.create({ name, description });
  }
};

export { CreateCategoryService };
