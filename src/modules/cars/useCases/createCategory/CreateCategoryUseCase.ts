import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * @param categoriesRepository
 * Serviço responsável por chamar o repositório e rodar seus métodos para criar a category.
 */
class CreateCategoryUseCase {
  constructor(
    private categoriesRepository: ICategoriesRepository
  ) {};

  async execute({ name, description }: IRequest): Promise<void> {
    const checkIfCategoryExists = await this.categoriesRepository.findByName(name);

    if (checkIfCategoryExists) throw new Error('Category alread exists!');

    this.categoriesRepository.create({ name, description });
  }
};

export { CreateCategoryUseCase };
