const colors = require('colors')
const createDistribution = require('./createDistribution')
const seedrandom = require('seedrandom')

module.exports = async function getTrait(
	traitName,
	tokenId,
	tokenSubgraphData,
	object
) {
	try {
		const { fusionCount, faction, generation } = tokenSubgraphData

		const target = faction == 'Reapers' ? object.Reapers : object.Tricksters

		for (let i = fusionCount; i > 0; i--) {
			let eligibles = []

			for (const key in target) {
				if (target[key].minimum == i) {
					target[key].name = key
					eligibles.push(target[key])
				}
			}

			if (eligibles.length) {
				const distribution = await createDistribution(eligibles)

				const rng = seedrandom(
					tokenId + i + faction + generation + traitName
				)

				const fetchedIndex = Math.floor(distribution.length * rng())

				const trait = eligibles[distribution[fetchedIndex]]

				if (trait != null && trait != undefined) return trait
			}
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
