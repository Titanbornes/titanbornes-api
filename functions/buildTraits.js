const Token = require('../models/tokenModel')
const colors = require('colors')

const seededRandomNumberInRange = require('./seededRandomNumberInRange')

module.exports = async function buildTraits(tokenId) {
	try {
		const token = await Token.findOne({
			tokenId,
		})

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
