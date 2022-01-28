import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const listRepository = CategoriesRepository.getInstance();

const listCategoryUseCase = new ListCategoriesUseCase(listRepository);

const listCategoryController = new ListCategoriesController(
    listCategoryUseCase
);

export { listCategoryController };
