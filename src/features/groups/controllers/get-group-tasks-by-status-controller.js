const getGroupTasksByStatus = require('../use-cases/get-group-tasks-by-status');

const getGroupTasksByStatusController = async (req, res, next) => {
  try {
    const { groupId, status } = req.params;
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: 'Date query parameter is required' });
    }

    if (status !== 'completed' && status !== 'pending') {
      return res.status(400).json({ message: 'Status must be either completed or pending' });
    }

    const tasks = await getGroupTasksByStatus(groupId, date, status);
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

module.exports = getGroupTasksByStatusController;
