import { Router } from "express";
import { AuthenticateController } from "../modules/account/useCases/authenticateUser/AuthenticateController";

const authenticateRoutes = Router();

const authenticateController = new AuthenticateController();

authenticateRoutes.post("/sessions", authenticateController.handle);

export { authenticateRoutes };
