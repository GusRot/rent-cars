import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CategoriesRepositoriesInMemory } from "../../repositories/TestsRepository/CategoriesRepositoriesInMemory";
import { AppError } from "../../../../errors";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoriesInMemory: CategoriesRepositoriesInMemory;

describe("Criar Categoria", () => {
    beforeEach(() => {
        categoriesRepositoriesInMemory = new CategoriesRepositoriesInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoriesRepositoriesInMemory
        );
    });

    it("Deve ser possivel criar uma nova categoria", async () => {
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

    it("Não deve ser possivel criar uma nova categoria com um nome existente", () => {
        expect(async () => {
            const category = {
                name: "Category Test",
                description: "Description Test",
            };
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });

            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
