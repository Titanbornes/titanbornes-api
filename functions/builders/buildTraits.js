const colors = require('colors')
const traits = require('../../data/Traits.json')
const seededRandomNumberInRange = require('../helpers/seededRandomNumberInRange')

module.exports = async function buildTraits(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const Element =
			traits.Element[
				seededRandomNumberInRange(
					fusionCount + faction + generation,
					0,
					3
				)
			]

		return {
			Fusions: fusionCount,
			Faction: faction,
			Generation: generation,
			Animated: fusionCount > 4 ? true : false,
			Element,
			Eyes: await traits[faction][fusionCount].Eyes,
			Head: await traits[faction][fusionCount].Head,
			Hair: await traits[faction][fusionCount].Hair,
			Face: await traits[faction][fusionCount].Face,
			Ear: await traits[faction][fusionCount].Ear,
			Hand: await traits[faction][fusionCount].Hand,
			Neck: await traits[faction][fusionCount].Neck,
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
