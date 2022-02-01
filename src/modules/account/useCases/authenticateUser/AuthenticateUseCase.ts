import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { UserRepository } from "../../repositories/implementations/UserRepository";

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
        private userRepository: UserRepository
    ) {}

    async execute({ email, password }: IAuthenticate): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        const userPassword = await compare(password, user.password);

        if (!userPassword || !user) {
            throw new Error("Email or password incorrect");
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
