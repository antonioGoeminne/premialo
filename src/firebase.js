const admin = require('firebase-admin');

// Asegúrate de tener este archivo en la raíz de tu proyecto
const serviceAccount = require('./db/fireConfig.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { db };
