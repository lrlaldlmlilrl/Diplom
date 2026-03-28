import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize("postgres://Rad:123@localhost:5432/db");

export {sequelize, DataTypes}