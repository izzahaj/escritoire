import db from "../models/index.js";
import Work from "../models/work.model.js";

const Work = db.works;
const op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    const workDetails = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description
    };

    const work = await Work.create(projectDetails);
    
    return res.status(201).json(work);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({
        message: error.message
      });
    }

    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const findAll = async (req, res) => {
  try {
    const title = req.query.title;
    let works = [];

    if (title) {
      works = await Work.findAll({
        where: {
          title: {
            [op.like]: `%${title}%`
          }
        }
      });
    } else {
      works = await Work.findAll();
    }
    res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    const work = await Work.findByPk(id);

    if (!work) {
      return res.status(404).json({
        message: "Work not found"
      });
    }

    res.status(200).json(work);
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const workDetails = {
      title: req.body.title,
      description: req.body.description
    };

    const work = await Work.findByPk(id);

    if (!work) {
      return res.status(404).json({
        message: "Work not found"
      });
    }
    await work.update(projectDetails);
    res.status(200).json(work);
  } catch (error) {
    return res.status(500).json({
      message: "Interval server error"
    });
  }
};

const remove = async (req, res) => {
  try {
    const id = req.params.id;
    const work = await Work.findByPk(id);
    if (!work) {
      return res.status(404).json({
        message: 'Work not found'
      });
    }
    await work.destroy();
    res.status(204).end();
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error'
    });
  }
};

export { create, findAll, findById, update, remove };