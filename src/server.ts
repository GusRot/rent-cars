import "reflect-metadata";
import express from "express";
import swaggerFile from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import "./database";
import "./shared/container";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

app.listen(3333);
