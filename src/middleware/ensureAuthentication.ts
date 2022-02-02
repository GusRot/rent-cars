import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors";
import { UserRepository } from "../modules/account/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthentication(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("invalid token", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userID } = verify(token, "ccsukcclsc") as IPayload;

        const userRepository = new UserRepository();

        const user = await userRepository.findByID(userID);

        if (!user) {
            throw new AppError("invalid user", 401);
        }

        request.user = { id: userID };

        next();
    } catch (error) {
        throw new AppError("invalid token", 401);
    }
}
