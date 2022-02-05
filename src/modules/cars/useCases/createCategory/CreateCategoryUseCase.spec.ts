import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepositoriesInMemory } from "../../repositories/TestsRepository/CategoriesRepositoriesInMemory";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoriesInMemory: CategoriesRepositoriesInMemory;

describe("Criar Categoria", () => {
    beforeEach(() => {
        categoriesRepositoriesInMemory = new CategoriesRepositoriesInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoriesInMemory
        );
    });

    it("Espero criar uma nova categoria", async () => {
        const category = {
            name: "Category Test",
            description: "Description Test",
        };
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });

        const categoryCreated = await categoriesRepositoriesInMemory.findByName(
            category.name
        );

        expect(categoryCreated).toHaveProperty("id");
    });
});
