const express = require('express')
const router = express.Router()
const fs = require('fs')
const { NotFound } = require('../../errors')

// Feature routes
router.use('/groups', require('../features/groups/routes'))

const PATH_ROUTES = __dirname

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file)
  if (name === 'index') return false // skip index.js
  if (file.includes('.js')) { // only js files
    router.use(`/${name}`, require(`./${file}`))
  } else {
    // eslint-disable-next-line array-callback-return
    fs.readdirSync(`${PATH_ROUTES}/${name}`).filter((file) => {
      const provedorName = removeExtension(file)
      router.use(`/${name}/${provedorName}`, require(`./${name}/${file}`))
    })
  }
  return false
})

// Manejador general de errores 404 (al final del listado de rutas de los endpoints)
router.use((req, res) => {
  throw new NotFound(process.env.MSG_RND || 'Página no encontrada')
})

module.exports = router
