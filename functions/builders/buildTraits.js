const colors = require('colors')
const seededRandomNumberInRange = require('../helpers/seededRandomNumberInRange')
const seedrandom = require('seedrandom')
const traits = require('../../Traits.json')

async function createDistribution(array) {
	const distribution = [],
		weights = []

	for (const key in array) {
		weights.push(array[key].chance)
	}

	const sum = weights.reduce((a, b) => a + b)

	for (let i = 0; i < array.length; i++) {
		const limit = sum * weights[i]
		for (let j = 0; j < limit; j++) {
			distribution.push(i)
		}
	}
	return distribution
}

async function getTrait(tokenId, fusionCount, faction, generation, object) {
	const target = faction == 'Reapers' ? object.Reapers : object.Tricksters

	for (let index = fusionCount; index > 0; index--) {
		let eligibles = []

		for (const key in target) {
			if (target[key].minimum == index) eligibles.push(target[key])
		}

		if (eligibles.length) {
			const distribution = await createDistribution(eligibles)

			const rng = seedrandom(
				tokenId + index + faction + generation + 'horn'
			)

			const fetchedIndex = Math.floor(distribution.length * rng())

			return eligibles[distribution[fetchedIndex]]
		}
	}
}

async function generateEyes(tokenId, tokenSubgraphData) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const trait = await getTrait(
			tokenId,
			fusionCount,
			faction,
			generation,
			traits.eyes
		)

		return trait
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}

async function generateHorn(tokenId, tokenSubgraphData) {
	try {
		let index
		const { fusionCount, faction, generation } = tokenSubgraphData

		if (fusionCount > 1) {
		} else {
			index = 0
		}

		// return Object.keys(traits.horn.Tricksters)[index]
		return false
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
			Horn: await generateHorn(tokenId, tokenSubgraphData),
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
