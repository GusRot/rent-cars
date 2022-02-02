import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerFile from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import { router } from "./routes";
import { AppError } from "./errors";

const app = express();

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json(err.message);
        }

        return response.status(500).json({
            status: "error",
            message: `internal server error ${err.message}`,
        });
    }
);

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333);
