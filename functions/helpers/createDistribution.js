const colors = require('colors')

module.exports = async function createDistribution(eligibles) {
	try {
		let distribution = [],
			weights = []

		for (let index in eligibles) {
			weights.push(eligibles[index].weight)
		}

		let sum = weights.reduce((a, b) => a + b)

		if (sum < 100) {
			eligibles.push(null)
			weights.push(100 - sum)
		}

		for (let i = 0; i < eligibles.length; i++) {
			const limit = sum * weights[i]
			for (let j = 0; j < limit; j++) {
				distribution.push(i)
			}
		}

		return distribution
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
