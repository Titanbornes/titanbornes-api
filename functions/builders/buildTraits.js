const colors = require('colors')
const traits = require('../../Traits.json')
const getTrait = require('../helpers/getTrait')

async function generateEyes(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const trait = await getTrait(
			'eyes',
			tokenId,
			fusionCount,
			faction,
			generation,
			traits.eyes
		)

		return trait.name
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}

async function generateHead(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const trait = await getTrait(
			'head',
			tokenId,
			fusionCount,
			faction,
			generation,
			traits.head
		)

		return trait.name
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}

async function generateHair(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const trait = await getTrait(
			'hair',
			tokenId,
			fusionCount,
			faction,
			generation,
			traits.hair
		)

		return trait.name
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}

module.exports = async function buildTraits(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		return {
			Fusions: fusionCount,
			Faction: faction,
			Generation: generation,
			Animated: fusionCount > 4 ? true : false,
			Transcendent: fusionCount > 9 ? true : false,
			Eyes: await generateEyes(tokenId, tokenSubgraphData),
			Head: await generateHead(tokenId, tokenSubgraphData),
			Hair: await generateHair(tokenId, tokenSubgraphData),
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
