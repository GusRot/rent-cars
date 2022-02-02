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
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.repository.findOne({ username });
        return user;
    }

    async findByID(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }

    async create({
        name,
        username,
        email,
        driver_license,
        password,
        id,
        avatar,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
            id,
            avatar,
        });

        await this.repository.save(user);
    }
}

export { UserRepository };
