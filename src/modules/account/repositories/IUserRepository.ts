import { User } from "../entities/User";
import ICreateUserDTO from "../interface";

interface IUserRepository {
    create(date: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findByUsername(username: string): Promise<User>;
}

export { IUserRepository };
