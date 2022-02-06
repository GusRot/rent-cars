import { AppError } from "../../../../errors";
import ICreateUserDTO from "@modules/account/interface";
import { UserRepositoryInMemory } from "../../repositories/testsRepository/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

let authenticateUserUseCase: AuthenticateUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("authenticate user", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUseCase(
            userRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("Deve ser possivel criar a autenticação do usuário", async () => {
        const user: ICreateUserDTO = {
            driver_license: "1234",
            email: "g@test",
            name: "gg test",
            password: "test",
            username: "GTest",
        };

        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("nao deve ser possivel autenticar com a senha incorreta", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                driver_license: "1234",
                email: "g@testError",
                name: "gg testError",
                password: "testError",
                username: "GTestError",
            };

            await createUserUseCase.execute(user);

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "error",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("usuário nao existente nao deve ser autenticável", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "js@s",
                password: "error",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
