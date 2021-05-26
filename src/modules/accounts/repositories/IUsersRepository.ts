import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByUsername(nome: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(user_id: string): Promise<User>;

}

export { IUsersRepository }
