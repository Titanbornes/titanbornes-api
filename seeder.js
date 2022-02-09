require('dotenv').config()
const mongoose = require('mongoose')
const colors = require('colors')
const users = require('./data/users')
const User = require('./models/userModel')
const connectDB = require('./config/db')

connectDB()

const importData = async () => {
  try {
    

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
