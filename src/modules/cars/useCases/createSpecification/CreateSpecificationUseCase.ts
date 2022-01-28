import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationExists =
            this.specificationRepository.findByName(name);

        if (specificationExists) {
            throw new Error("Category already exists");
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
