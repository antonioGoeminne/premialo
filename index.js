const app = require('./app')
const PORT = process.env.PORT || '4000'

// Iniciar el Server
const server = app.listen(PORT, async () => {
  console.log('Servidor ejecutándose en el puerto', PORT)
})

module.exports = server
