import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { AppError } from "@error/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, username, password, email, driver_license}: ICreateUserDTO): Promise<void> {
    const checkIfUsernameExists = await this.usersRepository.findByUsername(username);

    if (checkIfUsernameExists) throw new AppError("Username already exists");

    const checkIfEmailExists = await this.usersRepository.findByEmail(email);

    if (checkIfEmailExists) throw new AppError("Email already exists");

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ name, username, password: passwordHash, email, driver_license });

  }
}

export { CreateUserUseCase }
