import db from '../models/index';

const Project = db.projects;
const op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    const projectDetails = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      user_id: req.body.user_id,
    };

    const project = await Project.create(projectDetails);

    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    if (error.name === 'SequelizeValidationError') {
      res.status(400).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findAll = async (req, res) => {
  try {
    const { title } = req.query;
    let projects = [];

    if (title) {
      projects = await Project.findAll({
        where: {
          title: {
            [op.like]: `%${title}%`,
          },
        },
      });
    } else {
      projects = await Project.findAll();
    }
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      res.status(404).json({
        message: 'Project not found',
      });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const projectDetails = {
      title: req.body.title,
      description: req.body.description,
      user_id: req.body.user_id,
    };

    const project = await Project.findByPk(id);

    if (!project) {
      res.status(404).json({
        message: 'Project not found',
      });
    }
    await project.update(projectDetails);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({
      message: 'Interval server error',
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (!project) {
      res.status(404).json({
        message: 'Project not found',
      });
    }
    await project.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

export {
  create, findAll, findById, update, remove,
};
