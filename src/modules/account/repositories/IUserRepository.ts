import ICreateUserDTO from "../interface";

interface IUserRepository {
    create(date: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
