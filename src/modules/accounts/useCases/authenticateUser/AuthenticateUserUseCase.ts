import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "@error/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    username: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ username, password }: IRequest): Promise<IResponse> {
    // Verificar se o usuário existente
    const user = await this.usersRepository.findByUsername(username);

    if (!user) {
      throw new AppError("Username or password incorrect!");
    }

    // Verificar se a senha está correta
    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Username or password incorrect!");
    }

    //Gerar o JSONWEBTOKEN
    const token = sign({}, "7768a56f3f6fb3a6f6cc6d96c4f39ddd", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
        username: user.username
      }
    }

    return tokenReturn;
  }

};

export { AuthenticateUserUseCase };
