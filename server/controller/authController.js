import {User} from "../models/User"
import bcrypt from "bcryptjs";

const registerUser = async (req, res) =>{
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const us = User.build({
            login:req.body.login,
            password:hashPassword,
            fullName:req.body.fullName,
            phone:req.body.phone,
            email:req.body.email,
        })
    await us.save()
    res.sendStatus(201)
    } catch {
        res.sendStatus(500)
    }
}

const loginUser = async (req, res) =>{
    res.send("Юзер залогинелся")
}
const logoutUser = async (req, res) =>{
    res.send("Юзер разлогинелся")
}

const getProfile = async (req, res) =>{
    res.send("Дать данные юзера")
}



export {registerUser,loginUser,logoutUser,getProfile}