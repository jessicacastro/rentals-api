import { AppError } from "@error/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase:AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("AuthenticateUserUseCase", () => {

  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  })

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      username: "testeuser",
      email: "user@teste.com",
      password: "1234",
      name: "User Test"
    }

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({ username: user.username, password: user.password });
    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate a user that not exists", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({ username: "Teste", password: "teste123"});
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate a user with the wrong password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "000123",
        username: "testeuser",
        email: "user@teste.com",
        password: "1234",
        name: "User Test"
      }



      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({ username: "testeuser", password: "teste123"});
    }).rejects.toBeInstanceOf(AppError);
  });

});
