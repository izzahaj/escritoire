import db from '../models/index';

const User = db.users;
const op = db.Sequelize.Op;

const create = async (req, res) => {
  try {
    const userDetails = {
      id: req.body.id,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    const user = await User.create(userDetails);

    res.status(201).json(user);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      res.status(400).json({
        message: error.message,
      });
    }
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findAll = async (req, res) => {
  try {
    const { username } = req.query;
    let users = [];

    if (username) {
      users = await User.findAll({
        where: {
          username: {
            [op.like]: `%${username}%`,
          },
        },
      });
    } else {
      users = await User.findAll();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({
        message: 'User not found',
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetails = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };

    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({
        message: 'User not found',
      });
    }
    await user.update(userDetails);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: 'Interval server error',
    });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({
        message: 'User not found',
      });
    }
    await user.destroy();
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
