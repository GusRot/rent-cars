import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationRoutes } from "./Specifications.routes";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("users", usersRoutes);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };
