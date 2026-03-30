import jwt from "jsonwebtoken"
const secret = "secret"

const generateToken = (payload) =>{
    const token = jwt.sign(payload,secret, {
        expiresIn:"1h"
    })
    return token
}

const verifyToken = (token) =>{
    try{
        const payload = jwt.verify(token,secret)
        return payload
    }catch {
    }
    
}

export {generateToken,verifyToken}