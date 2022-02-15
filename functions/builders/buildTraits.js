const Token = require('../../models/tokenModel')
const colors = require('colors')
const seededRandomNumberInRange = require('../helpers/seededRandomNumberInRange')
const { tempTraits } = require('../handlers/createTempData')

module.exports = async function buildTraits(tokenId) {
	try {
		if (tempTraits[tokenId]) {
			return tempTraits[tokenId]
		} else {
			const token = await Token.findOne({
				tokenId,
			})

			const mask = seededRandomNumberInRange(
				tokenId + token.faction + 'mask',
				5,
				9
			)

			const trait = { mask }
			
			tempTraits[tokenId] = trait

			return trait
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
