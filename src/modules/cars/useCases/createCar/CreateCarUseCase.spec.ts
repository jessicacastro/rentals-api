import { AppError } from "@shared/error/AppError";

import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("CreateCarUseCase", () => {
  // Makes only one instance of the repository, first of all
  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = {
      name: "Name Car",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    };

    const result = await createCarUseCase.execute(car);

    expect(result).toHaveProperty("id");
  });

  it("should not be able to create a car with an existent license plate", async () => {
    expect(async () => {
      const car = {
        name: "Name Car",
        description: "Description Car",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category"
      };

      await createCarUseCase.execute(car);

    }).rejects.toBe(AppError);
  });

  it("should be able to create a new car that is available by default", async () => {
    const car = {
      name: "Name Car Available",
      description: "Description Car",
      daily_rate: 100,
      license_plate: "ABCD-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category"
    };

    const result = await createCarUseCase.execute(car);

    expect(result.available).toBe(true);
  });
})
