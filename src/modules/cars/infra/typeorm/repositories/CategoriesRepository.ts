import { getRepository, Repository } from 'typeorm';

import { ICategoriesRepository, ICreateCategoryDTO } from '@modules/cars/repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>;

  // private static INSTANCE: CategoriesRepository;

  constructor() {
     this.repository = getRepository(Category);
  };

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({name});

    return category;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  };

  async listAll(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }
};

export { CategoriesRepository };
