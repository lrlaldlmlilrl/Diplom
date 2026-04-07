import express from "express";
import cookieParser from "cookie-parser";
import { sequelize } from "./models/index.js";
import {authRouter} from "./routes/auth.routes.js"
import cors from "cors"
 
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
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
