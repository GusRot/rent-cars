import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        username,
        email,
        driver_license,
        password,
    }): Promise<void> {
        const passwordHash = await hash(password, 8);

        const usernameExist = await this.userRepository.findByUsername(
            username
        );
        const emailExist = await this.userRepository.findByEmail(email);

        if (usernameExist || emailExist) {
            throw new Error("username and email must be unique");
        }

        await this.userRepository.create({
            name,
            username,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase };
