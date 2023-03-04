const Chapter = (sequelize, Sequelize) => {
  const chapter = sequelize.define('chapter', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    order: {
      type: Sequelize.INTEGER,
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
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  return chapter;
};

export default Chapter;
