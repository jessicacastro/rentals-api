import { Request, Response } from "express";

import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, username } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const authInfo = await authenticateUserUseCase.execute({ username, password });

    return response.status(201).json(authInfo);
  }
}

export { AuthenticateUserController }
