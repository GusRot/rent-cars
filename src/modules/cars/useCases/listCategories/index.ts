import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCategoriesController => {
    const listRepository = new CategoriesRepository();

    const listCategoryUseCase = new ListCategoriesUseCase(listRepository);

    const listCategoryController = new ListCategoriesController(
        listCategoryUseCase
    );

    return listCategoryController;
};
