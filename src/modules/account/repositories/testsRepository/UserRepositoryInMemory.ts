import { User } from "@modules/account/entities/User";
import ICreateUserDTO from "@modules/account/interface";
import _interface from "@modules/account/interface";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];

    async create({
        driver_license,
        name,
        username,
        email,
        password,
        id = "test",
        avatar = "null",
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            driver_license,
            name,
            username,
            email,
            password,
            id,
            avatar,
        });

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }

    async findByUsername(username: string): Promise<User> {
        return this.users.find((user) => user.username === username);
    }

    async findByID(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UserRepositoryInMemory };
