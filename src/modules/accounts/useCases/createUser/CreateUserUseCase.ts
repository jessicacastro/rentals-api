import { inject, injectable } from "tsyringe"
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, username, password, email, driver_license}: IRequest): Promise<void> {
    const checkIfUserExists = await this.usersRepository.findByUsername(username);

    if (checkIfUserExists) throw new Error("Username already exists");

    await this.usersRepository.create({ name, username, password, email, driver_license });

  }
}

export { CreateUserUseCase }
