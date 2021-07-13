import { getRepository, Repository } from 'typeorm';

import { ISpecificationsDTO, ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { Specification } from '../entities/Specification';


class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  };

  async findByName(name: string): Promise<Specification> {
    const repository = await this.repository.findOne({ name });

    return repository;
  }

  async create({ name, description }: ISpecificationsDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  };

  async listAll(): Promise<Specification[]> {
    const specifications = await this.repository.find();

    return specifications;
  }
};

export { SpecificationsRepository };
