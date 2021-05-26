import { Specification } from "../entities/Specification";

//DTO - Data Transfer Object
interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification>;
  listAll(): Promise<Specification[]>;
  create({ name, description }: ISpecificationsDTO): Promise<void>;
}

export { ISpecificationsRepository, ISpecificationsDTO };
