const firestore = require('../../../lib/firestore');

const updateTask = async (taskId, taskData) => {
  try {
    await firestore.update('tasks', taskId, taskData);
    return { id: taskId, ...taskData };
  } catch (error) {
    throw new Error(`Error updating task: ${error.message}`);
  }
};

module.exports = updateTask;
