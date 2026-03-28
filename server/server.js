import express from "express";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import {User} from "./models/User"
import { sequelize } from "./models/index";

const app = express();

app.use(express.json());
app.use(cookieParser())



app.get("/",(req,res)=>{
    res.send("Сервер запущен")
} )



app.post("/api/registr",async (req,res)=>{
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
})

app.listen(3000, async () => {
    console.log("API работает на http://localhost:3000");
    
    await sequelize.authenticate()
        .then(()=>{console.log("БД успешно подключилось")})
        .catch((err)=>{console.log("Ошибка",err)}
    );

    await sequelize.sync({ force: true, logging:false });
});
