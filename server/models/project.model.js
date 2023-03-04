const Project = (sequelize, Sequelize) => {
  const project = sequelize.define("user", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return user;
}

export default User;