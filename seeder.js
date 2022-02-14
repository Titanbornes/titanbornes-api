const Token = require('./models/tokenModel')
const connectDatabase = require('./functions/databaseHandler')
const randomNumberInRange = require('./functions/helpers/randomNumberInRange')
const colors = require('colors')
require('dotenv').config()

connectDatabase()

const importData = async () => {
	try {
		await Token.deleteMany()

		let data = []

		for (let i = 0; i < 10; i++) {
			data.push({
				tokenId: i,
				faction:
					randomNumberInRange(0, 1) == 0 ? 'Reapers' : 'Tricksters',
			})
		}

		await Token.insertMany(data)

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
