import { Category } from '../../model/Category'
import { ISpecificationsRepository, ISpecificationsDTO } from './ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Category[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  };

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
  }

  findByName(name: string): Category {
    const category = this.specifications.find((category) =>  category.name === name);

    return category;
  }

  create({ name, description }: ISpecificationsDTO): void {
    const category = new Category();

    Object.assign(category, { name, description });

    this.specifications.push(category);
  };

  listAll(): Category[] {
    return this.specifications;
  }
};

export { SpecificationsRepository };
