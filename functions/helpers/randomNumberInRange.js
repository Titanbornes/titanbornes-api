const colors = require('colors')

module.exports = function randomNumberInRange(min, max) {
	try {
		return Math.floor(Math.random() * (max - min) + min)
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
