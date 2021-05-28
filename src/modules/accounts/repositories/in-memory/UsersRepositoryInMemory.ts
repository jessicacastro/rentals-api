import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({ driver_license, email, name, password, username}: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { driver_license, email, name, password, username});

    this.users.push(user);
  }

  async findByUsername(nome: string): Promise<User> {
    return this.users.find((user) => user.username === nome);
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(user_id: string): Promise<User> {
    return this.users.find((user) => user.id === user_id);
  }

}

export { UsersRepositoryInMemory };
