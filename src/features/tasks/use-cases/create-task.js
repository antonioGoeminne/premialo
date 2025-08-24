const firestore = require('../../../lib/firestore');

const createTask = async (taskData) => {
  try {
    const taskId = await firestore.create('tasks', taskData);
    return { id: taskId, ...taskData };
  } catch (error) {
    throw new Error(`Error creating task: ${error.message}`);
  }
};

module.exports = createTask;
