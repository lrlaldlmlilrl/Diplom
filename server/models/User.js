import {sequelize ,DataTypes} from "../models/index.js";

const User =  sequelize.define("User",{
    login:{type:DataTypes.STRING , allowNull:false },
    password:{type:DataTypes.STRING , allowNull:false },
    fullName:{type:DataTypes.STRING , allowNull:false },
    phone:{type:DataTypes.STRING , allowNull:false },
    email:{type:DataTypes.STRING , allowNull:false },
});

export {User}