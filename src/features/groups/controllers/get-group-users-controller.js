const getGroupUsers = require('../use-cases/get-group-users');

const getGroupUsersController = async (req, res) => {
  try {
    const { groupId } = req.params;
    const users = await getGroupUsers(groupId);
    res.json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getGroupUsersController;
