const joinGroup = require('../use-cases/join-group');

const joinGroupController = async (req, res, next) => {
  try {
    const { shareCode } = req.params;
    const { userId } = req.body; // Assuming userId is sent in the request body

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const group = await joinGroup(shareCode, userId);
    res.json(group);
  } catch (error) {
    next(error);
  }
};

module.exports = joinGroupController;
