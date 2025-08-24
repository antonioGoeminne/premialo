const createTask = require('../use-cases/create-task');

const createTaksController = async (req, res, next) => {
  try {
    const taskData = req.body;
    const task = await createTask(taskData);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = createTaksController;
