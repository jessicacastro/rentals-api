
import { AppError } from "@error/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("CreateCategoryUseCase", () => {

  beforeAll(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category test description"
    }

    await createCategoryUseCase.execute(category);

    const result = await categoriesRepositoryInMemory.findByName(category.name);

    expect(result).toHaveProperty("id");
  });

  it("should not be able to create a category that already exists", async () => {
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category test description"
      }

      await createCategoryUseCase.execute(category);
    }).rejects.toBe(AppError);
  });
});
