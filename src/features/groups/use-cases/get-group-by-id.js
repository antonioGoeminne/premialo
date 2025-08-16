const firestore = require('../../../lib/firestore');

const getGroupById = async (id) => {
  try {
    const group = await firestore.read('groups', id);
    if (!group) {
      throw new Error('Group not found');
    }
    return group;
  } catch (error) {
    throw new Error(`Error getting group: ${error.message}`);
  }
};

module.exports = getGroupById;
