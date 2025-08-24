const express = require('express')
const router = express.Router()
const { NotFound } = require('../../errors')

// Feature routes
const groupsRoutes = require('../features/groups/routes');
const tasksRoutes = require('../features/tasks/routes');

const PATH_ROUTES = __dirname

const removeExtension = (fileName) => {
  // ...existing code...
}

const router = (app) => {
  app.use('/api/groups', groupsRoutes);
  app.use('/api/tasks', tasksRoutes);
};

// Manejador general de errores 404 (al final del listado de rutas de los endpoints)
router.use((req, res) => {
  throw new NotFound(process.env.MSG_RND || 'Página no encontrada')
})

module.exports = router
