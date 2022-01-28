import { Specification } from "../model/Specification";

interface ICreateSpecification {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecification): void;
    findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecification };
