import "reflect-metadata"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

interface IAuthenticate {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        email: string;
        name: string;
    };
    token: string;
}

@injectable()
class AuthenticateUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({ email, password }: IAuthenticate): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (user) {
            const userPassword = await compare(password, user.password);

            if (!userPassword) {
                throw new AppError("password incorrect");
            }
        } else {
            throw new AppError("Email incorrect");
        }

        const token = sign({}, "ccsukcclsc", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}

export { AuthenticateUseCase };
