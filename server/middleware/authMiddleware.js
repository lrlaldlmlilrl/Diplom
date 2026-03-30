import {verifyToken} from "../utils/jwt.js"

const authMiddleware = (req, res, next) =>{
    try {
        const token = req.cookies.token;
        const payload = verifyToken(token);
        req.user = payload;
        next();
    } catch {
        res.sendStatus(401)
    }
};

export {authMiddleware}; 