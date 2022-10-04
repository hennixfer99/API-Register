import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import UserLoginController from "../controllers/loginUser.controller"
import { Router } from "express";


const loginRouter = Router()

loginRouter.post("", verifyAuthToken, UserLoginController)


export default loginRouter