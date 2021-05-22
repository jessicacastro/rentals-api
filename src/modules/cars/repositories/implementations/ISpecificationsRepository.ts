import { Category } from "../../model/Category";

//DTO - Data Transfer Object
interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name, description }: ISpecificationsDTO): void;
}

export { ISpecificationsRepository, ISpecificationsDTO };
