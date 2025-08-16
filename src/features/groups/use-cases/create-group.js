const firestore = require('../../../lib/firestore');
const generateRandomCode = require('../../../lib/generate-random-code');
const { db } = require('../../../firebase');

const createGroup = async (groupData) => {
  try {
    let uniqueCode;
    let isUnique = false;

    while (!isUnique) {
      uniqueCode = generateRandomCode();
      const snapshot = await db.collection('groups').where('shareCode', '==', uniqueCode).get();
      if (snapshot.empty) {
        isUnique = true;
      }
    }

    const newGroupData = {
      ...groupData,
      shareCode: uniqueCode,
    };

    const groupId = await firestore.create('groups', newGroupData);
    return { id: groupId, ...newGroupData };
  } catch (error) {
    throw new Error(`Error creating group: ${error.message}`);
  }
};

module.exports = createGroup;
