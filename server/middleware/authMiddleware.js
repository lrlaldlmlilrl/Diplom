import jwtUtils from "../utils/jwt";

const authMiddleware = (req, res, next) =>{
    try {
        const token = req.cookies.token;
        const payload = jwtUtils.verifyToken(token);
        req.user = payload;
        next();
    } catch {
        res.sendStatus(401)
    }
};

export {authMiddleware}; 