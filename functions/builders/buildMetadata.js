const colors = require('colors')
const buildTraits = require('./buildTraits')

module.exports = async function buildMetadata(tokenId, tokenSubgraphData) {
	try {
		let attributes = []

		const traits = await buildTraits(tokenId, tokenSubgraphData)

		for (let trait in traits) {
			if (traits.hasOwnProperty(trait)) {
				attributes.push({
					trait_type: trait,
					value: traits[trait],
				})
			}
		}

		return {
			description: `Experimental Storytelling`,
			name: `Token #${tokenId}`,
			attributes,
			image: `https://titanbornes.herokuapp.com/api/image/${tokenId}`,
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
