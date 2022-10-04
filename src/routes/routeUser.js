import { Router } from "express";
import CreateUserController from "../controllers/createUser.controller";
import DeleteUserController from "../controllers/deleteUser.controller"
import UpdateUserController from "../controllers/updateUser.controller";
import ListUsersController from "../controllers/listUsers.controller"
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";

const UserRouter = Router()

UserRouter.post("", CreateUserController)
UserRouter.get("", ListUsersController)
UserRouter.patch("", verifyAuthToken,UpdateUserController)
UserRouter.delete("", verifyAuthToken,DeleteUserController)

export default UserRouter