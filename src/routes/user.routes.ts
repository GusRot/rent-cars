import { Router } from "express";
import multer from "multer";
import { ensureAuthentication } from "../middleware/ensureAuthentication";
import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { UpdateAvatarController } from "../modules/account/useCases/updateAvatar/UpdateAvatarController";
import uploadConfig from "../config/upload";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateAvatarController = new UpdateAvatarController();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch(
    "/avatar",
    ensureAuthentication,
    uploadAvatar.single("avatar"),
    updateAvatarController.handle
);

export { usersRoutes };
