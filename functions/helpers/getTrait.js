const colors = require('colors')
const createDistribution = require('./createDistribution')
const seedrandom = require('seedrandom')

module.exports = async function getTrait(
	traitName,
	tokenId,
	fusionCount,
	faction,
	generation,
	object
) {
	try {
		const target = faction == 'Reapers' ? object.Reapers : object.Tricksters

		for (let i = fusionCount; i > 0; i--) {
			console.error(`Searching in FUSION #${i}` .cyan)
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
				if (trait) return trait
			}
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
