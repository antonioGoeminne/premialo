require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const handleErrors = require('./middleware/handleErrors')
const { db } = require('./firebase')
const app = express()

app.use(cors())

// Middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true, limit: '5mb' }))

// Hacemos la DB disponible para todas las rutas
app.use((req, res, next) => {
  req.db = db
  next()
})

// Rutas Endpoints
app.use('/api', require('./routes'))
// Error handler
app.use(handleErrors)

module.exports = app
