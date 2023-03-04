const Work = (sequelize, Sequelize) => {
  const work = sequelize.define('work', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  });
  return work;
};

export default Work;
