import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase"

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("ListAvailableCarsUseCase", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  })

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Onix Teste",
      description: "Carro Cinza, com 4 portas",
      daily_rate: 300,
      license_plate: "KWM7C93",
      fine_amount: 120,
      brand: "Chevrolet",
      category_id: 'category_id'
    });

    const cars =  await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car])
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Onix Teste 2",
      description: "Carro Cinza, com 4 portas",
      daily_rate: 300,
      license_plate: "KWM7C93",
      fine_amount: 120,
      brand: "Chevrolet",
      category_id: 'category_id'
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Onix Teste 2"
    });

    expect(cars).toEqual([car])
  })

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Onix Teste 3",
      description: "Carro Cinza, com 4 portas",
      daily_rate: 300,
      license_plate: "KWM7C93",
      fine_amount: 120,
      brand: "Honda",
      category_id: 'category_id'
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Honda"
    });

    expect(cars).toEqual([car]);
  })

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Onix Teste 3",
      description: "Carro Cinza, com 4 portas",
      daily_rate: 300,
      license_plate: "KWM7C93",
      fine_amount: 120,
      brand: "Honda",
      category_id: 'category_id2'
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "category_id2"
    });

    expect(cars).toEqual([car]);
  })
})
