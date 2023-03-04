import db from '../models/index';

const Chapters = db.chapters;
const op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    const chapterDetails = {
      id: req.body.id,
      order: req.body.id.order,
      title: req.body.title,
      description: req.body.description,
      body: req.body.body,
      work_id: req.body.work_id,
    };

    const chapter = await Chapters.create(chapterDetails);

    res.status(201).json(chapter);
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
    let chapters = [];

    if (title) {
      chapters = await Chapters.findAll({
        where: {
          title: {
            [op.like]: `%${title}%`,
          },
        },
      });
    } else {
      chapters = await Chapters.findAll();
    }
    res.status(200).json(chapters);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await Chapters.findByPk(id);

    if (!chapter) {
      res.status(404).json({
        message: 'Chapters not found',
      });
    }

    res.status(200).json(chapter);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const chapterDetails = {
      order: req.body.id.order,
      title: req.body.title,
      description: req.body.description,
      body: req.body.body,
      work_id: req.body.work_id,
    };

    const chapter = await Chapters.findByPk(id);

    if (!chapter) {
      res.status(404).json({
        message: 'Chapters not found',
      });
    }
    await chapter.update(chapterDetails);
    res.status(200).json(chapter);
  } catch (error) {
    res.status(500).json({
      message: 'Interval server error',
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const chapter = await Chapters.findByPk(id);
    if (!chapter) {
      res.status(404).json({
        message: 'Chapters not found',
      });
    }
    await chapter.destroy();
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
