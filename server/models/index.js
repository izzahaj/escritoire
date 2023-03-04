import Sequelize from 'sequelize';
import dbConfig from '../config/db.config';
import User from './user.model';
import Project from './project.model';
import Work from './work.model';
import Chapter from './chapter.model';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAlisases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {
  Sequelize,
  sequelize,
};

const users = User(sequelize, Sequelize);
const projects = Project(sequelize, Sequelize);
const works = Work(sequelize, Sequelize);
const chapters = Chapter(sequelize, Sequelize);

users.hasMany(projects, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
});
projects.belongsTo(users, {
  foreignKey: {
    name: 'user_id',
    allowNull: false,
  },
});

projects.hasMany(works, {
  foreignKey: {
    name: 'project_id',
    allowNull: false,
  },
});
works.belongsTo(projects, {
  foreignKey: {
    name: 'project_id',
    allowNull: false,
  },
});

works.hasMany(chapters, {
  foreignKey: {
    name: 'work_id',
    allowNull: false,
  },
});
chapters.belongsTo(works, {
  foreignKey: {
    name: 'work_id',
    allowNull: false,
  },
});

db.users = users;
db.projects = projects;
db.works = works;
db.chapters = chapters;

export default db;
