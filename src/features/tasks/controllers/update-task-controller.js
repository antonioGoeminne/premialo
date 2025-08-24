const updateTask = require('../use-cases/update-task');

const updateTaskController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const taskData = req.body;
    const task = await updateTask(id, taskData);
    res.json(task);
  } catch (error) {
    next(error);
  }
};

module.exports = updateTaskController;
