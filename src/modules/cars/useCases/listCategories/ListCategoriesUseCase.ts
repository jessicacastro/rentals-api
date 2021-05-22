import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(
    private categoriesRepository: ICategoriesRepository
  ) {};

  execute(): Category[] {
    const categories = this.categoriesRepository.listAll();

    return categories;
  }
};

export { ListCategoriesUseCase };
