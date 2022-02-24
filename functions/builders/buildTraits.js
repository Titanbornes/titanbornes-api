const colors = require('colors')
const seededRandomNumberInRange = require('../helpers/seededRandomNumberInRange')

module.exports = async function buildTraits(tokenId, tokenSubgraphData) {
	try {
		console.log(tokenSubgraphData);
		const { fusionCount, faction, generation } = tokenSubgraphData

		const mask = seededRandomNumberInRange(
			tokenId + tokenSubgraphData.faction + 'mask',
			5,
			9
		)

		const animated = false
		const traits = { fusionCount, faction, generation, animated, mask }

		return traits
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
