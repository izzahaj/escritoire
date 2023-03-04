import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import User from "./user.model.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAlisases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  users: User(sequelize, Sequelize),
  projects: Project(sequelize, Sequelize)
};

export default db;