import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import ICreateUserDTO from "../../interface";
import _interface from "../../interface";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        name,
        username,
        email,
        driver_licence,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_licence,
            password,
        });

        await this.repository.save(user);

        throw new Error("Method not implemented.");
    }
}

export { UserRepository };
