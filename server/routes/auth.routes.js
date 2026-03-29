import {Router} from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {registerUser,loginUser,logoutUser,getProfile} from "../controller/authController.js"

const router = Router();

router.get("/profile", authMiddleware, getProfile)
router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/logout", logoutUser)

export{router}