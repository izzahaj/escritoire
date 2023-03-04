import dbConfig from "../config/db.config.js";
import Sequelize from "sequelize";
import User from "./user.model.js";
import Project from "./project.model.js"

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
  sequelize: sequelize
};

const users = User(sequelize, Sequelize);
const projects = Project(sequelize, Sequelize);

users.hasMany(projects, {
  foreignKey: {
    name: 'user_id',
    allowNull: false
  }
});
projects.belongsTo(users);

db.users = users;
db.projects = projects;

export default db;