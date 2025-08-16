const { db } = require('../../../firebase');
const getGroupTasks = require('./get-group-tasks');

const getGroupTasksByStatus = async (groupId, date, status) => {
  try {
    const groupTasks = await getGroupTasks(groupId);

    if (groupTasks.length === 0) {
      return [];
    }

    const dateObj = new Date(date);
    const startOfDay = new Date(dateObj.setHours(0, 0, 0, 0));
    const endOfDay = new Date(dateObj.setHours(23, 59, 59, 999));

    const taskRecordsRef = db.collection('task_records');
    const snapshot = await taskRecordsRef
      .where('status', '==', status)
      .where('completedAt', '>=', startOfDay)
      .where('completedAt', '<=', endOfDay)
      .get();

    const completedTaskIds = new Set();
    snapshot.forEach(doc => {
      completedTaskIds.add(doc.data().taskId);
    });

    if (status === 'completed') {
      return groupTasks.filter(task => completedTaskIds.has(task.id));
    }
    
    if (status === 'pending') {
      return groupTasks.filter(task => !completedTaskIds.has(task.id));
    }

    return [];
  } catch (error) {
    throw new Error(`Error getting group tasks by status: ${error.message}`);
  }
};

module.exports = getGroupTasksByStatus;
