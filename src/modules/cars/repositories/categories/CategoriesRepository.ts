import { Category } from '../../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  };

  findByName(name: string): Category {
    const category = this.categories.find((category) =>  category.name === name);

    return category;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  };

  listAll(): Category[] {
    return this.categories;
  }



};

export { CategoriesRepository };
