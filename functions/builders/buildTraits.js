const colors = require('colors')
const traits = require('../../Traits.json')
const getTrait = require('../helpers/getTrait')

module.exports = async function buildTraits(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		return {
			Fusions: fusionCount,
			Faction: faction,
			Generation: generation,
			Animated: fusionCount > 4 ? true : false,
			Transcendent: fusionCount > 9 ? true : false,
			Element: await getTrait(
				'Element',
				tokenId,
				tokenSubgraphData,
				traits.Element
			),
			Eyes: await getTrait(
				'Eyes',
				tokenId,
				tokenSubgraphData,
				traits.Eyes
			),
			Head: await getTrait(
				'Head',
				tokenId,
				tokenSubgraphData,
				traits.Head
			),
			Hair: await getTrait(
				'Hair',
				tokenId,
				tokenSubgraphData,
				traits.Hair
			),
			Face: await getTrait(
				'Face',
				tokenId,
				tokenSubgraphData,
				traits.Face
			),
			Ear: await getTrait(
				'Ear',
				tokenId,
				tokenSubgraphData,
				traits.Ear
			),
			Mouth: await getTrait(
				'Mouth',
				tokenId,
				tokenSubgraphData,
				traits.Mouth
			),
			Hand: await getTrait(
				'Hand',
				tokenId,
				tokenSubgraphData,
				traits.Hand
			),
			Neck: await getTrait(
				'Neck',
				tokenId,
				tokenSubgraphData,
				traits.Neck
			),
			Clothing: await getTrait(
				'Neck',
				tokenId,
				tokenSubgraphData,
				traits.Clothing
			),
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
