import {User} from "../models/User.js"
import bcrypt from "bcryptjs";
import {generateToken, verifyToken} from "../utils/jwt.js"

const registerUser = async (req, res) =>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            login:req.body.login,
            password:hashPassword,
            fullName:req.body.fullName,
            phone:req.body.phone,
        })
    
    res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}

const loginUser = async (req, res) =>{
    try {
        const user = await User.findOne({
            where: {login: req.body.login}}
        )
        if (user) {
            const isPassword = await bcrypt.compare(req.body.password, user.password)
            if (isPassword) {
                const token = generateToken({id: user.id})
                res.cookie("token", token, {
                    httpOnly: true,
                    sameSite: 'strict' 
                })
                res.json({message: "ПОльзователь вошел успешно"})
            } else {
                res.sendStatus(403)
            }
        } else {
            res.sendStatus(403)
        }
    } catch {
        res.sendStatus(403)
    }
};
const logoutUser = async (req, res) =>{
    res.send("Юзер разлогинелся")
}

const getProfile = async (req, res) =>{
    res.send("Дать данные юзера")
}



export {registerUser,loginUser,logoutUser,getProfile}