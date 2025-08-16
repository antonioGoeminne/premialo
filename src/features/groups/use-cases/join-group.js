const { db } = require('../../../firebase');
const firestore = require('../../../lib/firestore');

const joinGroup = async (shareCode, userId) => {
  try {
    const groupsRef = db.collection('groups');
    const snapshot = await groupsRef.where('shareCode', '==', shareCode).limit(1).get();

    if (snapshot.empty) {
      throw new Error('Group not found with the provided share code.');
    }

    const groupDoc = snapshot.docs[0];
    const group = { id: groupDoc.id, ...groupDoc.data() };

    if (group.users && group.users.includes(userId)) {
      return group; // User is already in the group
    }

    const updatedUsers = group.users ? [...group.users, userId] : [userId];

    await firestore.update('groups', group.id, { users: updatedUsers });

    return { ...group, users: updatedUsers };
  } catch (error) {
    throw new Error(`Error joining group: ${error.message}`);
  }
};

module.exports = joinGroup;
