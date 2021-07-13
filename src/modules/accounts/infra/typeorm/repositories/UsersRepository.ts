import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "../entities/User";


class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, username, password, email, driver_license, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_license,
      avatar,
      id
     });

    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }


  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(user_id: string): Promise<User> {
    const user = await this.repository.findOne(user_id);

    return user;
  }
};

export { UsersRepository };