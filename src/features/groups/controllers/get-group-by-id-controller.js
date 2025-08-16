const getGroupById = require('../use-cases/get-group-by-id');

const getGroupByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await getGroupById(id);
    res.json(group);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = getGroupByIdController;
