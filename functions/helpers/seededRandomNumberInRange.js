const seedrandom = require('seedrandom')

module.exports = function seededRandomNumberInRange(seed,min, max) {
	try {
		const rng = seedrandom(seed)
		return Math.floor(rng() * (max - min) + min)
	} catch (error) {
		console.log(error)
	}
}
