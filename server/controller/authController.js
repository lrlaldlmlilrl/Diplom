import {User} from "../models/User.js"
import bcrypt from "bcryptjs";
import {generateToken, verifyToken} from "../utils/jwt.js"
import { HttpProxy } from "vite";

const registerUser = async (req, res) =>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            login:req.body.login,
            password:hashPassword,
            fullName:req.body.fullName,
            phone:req.body.phone,
            email:req.body.email,
        })
    
    res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}

const loginUser = async (req, res) =>{
    try {
        const loginUser = User.findOne({
            where: {login: req.body.login}}
        )
        if (loginUser) {
            const isPassword = await bcrypt.compare(req.body.password, loginUser.password)
            if (isPassword) {
                const token = generateToken(loginUser.id)
                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: 'strict' 
                })
                res.json({message: "ПОльзователь вошел успешно"})
            }
        }  
    } catch {
        res.status(403)
    }
};
const logoutUser = async (req, res) =>{
    res.send("Юзер разлогинелся")
}

const getProfile = async (req, res) =>{
    res.send("Дать данные юзера")
}



export {registerUser,loginUser,logoutUser,getProfile}