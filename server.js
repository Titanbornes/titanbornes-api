require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// app.use(cors())
app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.json())

const resolvedDirectory = path.resolve()
app.use('/uploads', express.static(path.join(resolvedDirectory, '/uploads')))

app.get('/', (req, res) => {
  res.send('API is running....')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
