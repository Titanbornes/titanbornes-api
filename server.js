const path = require('path')
const resolvedDirectory = path.resolve()
const express = require('express')
const cors = require('cors')
const colors = require('colors')
const morgan = require('morgan')
require('dotenv').config()
const PORT = process.env.PORT || 5000

const { notFound, errorHandler } = require('./middleware/errorMiddleware') // Middlewares
const tokenRoutes = require('./routes/tokenRoutes') // Routes
const imageRoutes = require('./routes/imageRoutes') // Routes
const connectDatabase = require('./functions/handlers/connectDatabase') // Handlers
const eventListener = require('./functions/handlers/eventListener')

connectDatabase()
eventListener()
const app = express()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())

app.use('/api/tokenURI', tokenRoutes)
app.use('/api/images', imageRoutes)
app.use('/uploads', express.static(path.join(resolvedDirectory, '/uploads')))
app.get('/', (req, res) => {
	res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
			.bold
	)
)
