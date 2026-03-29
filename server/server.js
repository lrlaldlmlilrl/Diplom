import express from "express";
import bcrypt from "bcryptjs";
import cookieParser from "cookie-parser";
import {User} from "./models/User"
import { sequelize } from "./models/index";
import {authRouter} from "../routes/auth.routes"
 
const app = express();

app.use(express.json());
app.use(cookieParser())

app.use("/api", authRouter)

app.get("/",(req,res)=>{
    res.send("Сервер запущен")
} )


app.listen(3000, async () => {
    console.log("API работает на http://localhost:3000");
    
    await sequelize.authenticate()
        .then(()=>{console.log("БД успешно подключилось")})
        .catch((err)=>{console.log("Ошибка",err)}
    );

    await sequelize.sync({ force: true, logging:false });
});
