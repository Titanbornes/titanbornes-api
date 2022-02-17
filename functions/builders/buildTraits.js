const colors = require('colors')
const seededRandomNumberInRange = require('../helpers/seededRandomNumberInRange')

module.exports = async function buildTraits(tokenId) {
	try {
		const mask = seededRandomNumberInRange(
			tokenId + token.faction + 'mask',
			5,
			9
		)

		return { mask }
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
