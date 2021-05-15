import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/categories/CategoriesRepository";

class ListAllCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {};

  execute(): Category[] {
    return this.categoriesRepository.listAll();
  }
}

export { ListAllCategoryService };
