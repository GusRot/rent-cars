import { Specification } from "../entities/Specification";

interface ICreateSpecification {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ description, name }: ICreateSpecification): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationRepository, ICreateSpecification };
