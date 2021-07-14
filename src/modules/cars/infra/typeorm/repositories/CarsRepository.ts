import { getRepository, Repository } from 'typeorm';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { Car } from '../entities/Car';
import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';


class CarsRepository implements ICarsRepository {

  private repository: Repository<Car>;

  constructor() {
     this.repository = getRepository(Car);
  }
;

  async create({ name, description, license_plate, fine_amount, brand, daily_rate, category_id }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({ name, description, license_plate, fine_amount, brand, daily_rate, category_id });

    await this.repository.save(car);

    return car;
  };

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({license_plate});

    return car;
  }

  async findAll(): Promise<Car[]> {
    const cars = await this.repository.find();

    return cars;
  }
};

export { CarsRepository };
