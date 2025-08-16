const firestore = require('../../../lib/firestore');

const getGroupUsers = async (groupId) => {
  try {
    const group = await firestore.read('groups', groupId);

    if (!group || !group.users || group.users.length === 0) {
      return [];
    }

    const userPromises = group.users.map(userId => firestore.read('users', userId));
    const users = await Promise.all(userPromises);

    return users.filter(user => user !== null);
  } catch (error) {
    throw new Error(`Error getting group users: ${error.message}`);
  }
};

module.exports = getGroupUsers;
