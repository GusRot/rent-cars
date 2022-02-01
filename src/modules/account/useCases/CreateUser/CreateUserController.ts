import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, username, email, driver_licence, password } =
            request.body;

        const createUserController = container.resolve(CreateUserUseCase);

        await createUserController.execute({
            name,
            username,
            email,
            driver_licence,
            password,
        });

        return response.status(201).send();
    }
}

export { CreateUserController };