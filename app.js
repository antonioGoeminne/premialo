require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const handleErrors = require('./middleware/handleErrors')
const app = express()

app.use(cors())

// Middlewares
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true, limit: '5mb' }))

// Rutas Endpoints
app.use('/api', require('./routes'))
// Error handler
app.use(handleErrors)

module.exports = app
