const createGroup = require('../use-cases/create-group');

const createGroupController = async (req, res, next) => {
  try {
    const groupData = req.body;
    const group = await createGroup(groupData);
    res.status(201).json(group);
  } catch (error) {
    next(error);
  }
};

module.exports = createGroupController;
