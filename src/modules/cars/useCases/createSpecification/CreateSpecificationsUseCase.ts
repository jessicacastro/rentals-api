import { ISpecificationsRepository } from "../../repositories/implementations/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * @param specificationsRepository
 * Serviço responsável por chamar o repositório e rodar seus métodos para criar a specification.
 */
class CreateSpecificationsUseCase {
  constructor(
    private specificationsRepository: ISpecificationsRepository
  ) {};

  execute({ name, description }: IRequest): void {
    const checkIfSpecificationsExists = this.specificationsRepository.findByName(name);

    if (checkIfSpecificationsExists) throw new Error('Specification alread exists!');

    this.specificationsRepository.create({ name, description });
  }
};

export { CreateSpecificationsUseCase };
