const seedrandom = require('seedrandom')
const colors = require('colors')

module.exports = function seededRandomNumberInRange(seed,min, max) {
	try {
		const rng = seedrandom(seed)
		return Math.floor(rng() * (max - min) + min)
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
