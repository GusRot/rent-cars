import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationExists =
            await this.specificationRepository.findByName(name);

        if (specificationExists) {
            throw new AppError("Category already exists");
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
