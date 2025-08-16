const { db } = require('../../firebase');

/**
 * Creates a new document in a collection.
 * @param {string} collection - The name of the collection.
 * @param {object} data - The data for the new document.
 * @returns {Promise<string>} The ID of the newly created document.
 */
const create = async (collection, data) => {
  const docRef = await db.collection(collection).add(data);
  return docRef.id;
};

/**
 * Reads a document from a collection.
 * @param {string} collection - The name of the collection.
 * @param {string} id - The ID of the document to read.
 * @returns {Promise<object|null>} The document data or null if not found.
 */
const read = async (collection, id) => {
  const docRef = db.collection(collection).doc(id);
  const doc = await docRef.get();
  if (!doc.exists) {
    return null;
  }
  return { id: doc.id, ...doc.data() };
};

/**
 * Updates a document in a collection.
 * @param {string} collection - The name of the collection.
 * @param {string} id - The ID of the document to update.
 * @param {object} data - The data to update.
 * @returns {Promise<string>} The ID of the updated document.
 */
const update = async (collection, id, data) => {
  const docRef = db.collection(collection).doc(id);
  await docRef.update(data);
  return id;
};

/**
 * Deletes a document from a collection.
 * @param {string} collection - The name of the collection.
 * @param {string} id - The ID of the document to delete.
 * @returns {Promise<string>} The ID of the deleted document.
 */
const remove = async (collection, id) => {
  await db.collection(collection).doc(id).delete();
  return id;
};

/**
 * Lists all documents in a collection.
 * @param {string} collection - The name of the collection.
 * @returns {Promise<Array<object>>} An array of documents.
 */
const list = async (collection) => {
  const snapshot = await db.collection(collection).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = {
  create,
  read,
  update,
  remove,
  list,
};
