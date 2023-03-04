import db from '../models/index';

const Work = db.works;
const op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    const workDetails = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
      project_id: req.body.project_id,
    };

    const work = await Work.create(workDetails);

    res.status(201).json(work);
  } catch (error) {
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
    let works = [];

    if (title) {
      works = await Work.findAll({
        where: {
          title: {
            [op.like]: `%${title}%`,
          },
        },
      });
    } else {
      works = await Work.findAll();
    }
    res.status(200).json(works);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const work = await Work.findByPk(id);

    if (!work) {
      res.status(404).json({
        message: 'Work not found',
      });
    }

    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const workDetails = {
      title: req.body.title,
      description: req.body.description,
      project_id: req.body.project_id,
    };

    const work = await Work.findByPk(id);

    if (!work) {
      res.status(404).json({
        message: 'Work not found',
      });
    }
    await work.update(workDetails);
    res.status(200).json(work);
  } catch (error) {
    res.status(500).json({
      message: 'Interval server error',
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const work = await Work.findByPk(id);
    if (!work) {
      res.status(404).json({
        message: 'Work not found',
      });
    }
    await work.destroy();
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
