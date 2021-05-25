import { Category } from "../entities/Category";

//DTO - Data Transfer Object
interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Category>;
  listAll(): Promise<Category[]>;
  create({ name, description }: ISpecificationsDTO): Promise<void>;
}

export { ISpecificationsRepository, ISpecificationsDTO };
