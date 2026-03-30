import {sequelize ,DataTypes} from "../models/index.js";

const User =  sequelize.define("User",{
    login:{type:DataTypes.STRING , allowNull:true },
    password:{type:DataTypes.STRING , allowNull:true },
    fullName:{type:DataTypes.STRING , allowNull:false },
    phone:{type:DataTypes.STRING , allowNull:false },
    email:{type:DataTypes.STRING , allowNull:true },
});

export {User}