import { inject, injectable } from "tsyringe"
import { hash } from "bcryptjs";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ name, username, password, email, driver_license}: ICreateUserDTO): Promise<void> {
    const checkIfUsernameExists = await this.usersRepository.findByUsername(username);

    if (checkIfUsernameExists) throw new Error("Username already exists");

    const checkIfEmailExists = await this.usersRepository.findByEmail(email);

    if (checkIfEmailExists) throw new Error("Email already exists");

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ name, username, password: passwordHash, email, driver_license });

  }
}

export { CreateUserUseCase }
