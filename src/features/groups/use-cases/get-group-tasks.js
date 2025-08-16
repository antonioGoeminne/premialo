const { db } = require('../../../firebase');

const getGroupTasks = async (groupId) => {
  try {
    const tasksRef = db.collection('tasks');
    const snapshot = await tasksRef.where('groupId', '==', groupId).get();

    if (snapshot.empty) {
      return [];
    }

    const tasks = [];
    snapshot.forEach(doc => {
      tasks.push({ id: doc.id, ...doc.data() });
    });

    return tasks;
  } catch (error) {
    throw new Error(`Error getting group tasks: ${error.message}`);
  }
};

module.exports = getGroupTasks;
