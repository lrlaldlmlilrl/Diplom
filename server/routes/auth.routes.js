import {Router} from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {registerUser,loginUser,logoutUser,getProfile} from "../controller/authController.js"

const authRouter = Router();

authRouter.get("/profile", authMiddleware, getProfile)
authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)
authRouter.post("/logout", logoutUser)

export{authRouter}