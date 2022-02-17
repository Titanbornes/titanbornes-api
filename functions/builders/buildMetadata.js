const colors = require('colors')

module.exports = async function buildMetadata(tokenId, data) {
	try {
		const { generation, fusionCount } = data

			const raw = {
				generation,
				fusionCount
			}

			let attributes = []

			for (var key in raw) {
				if (raw.hasOwnProperty(key)) {
					attributes.push({
						trait_type: key,
						value: raw[key],
					})
				}
			}

			return {
				description: `Experimental Storytelling`,
				name: `Token #${tokenId}`,
				attributes,
				image: `https://titanbornes.herokuapp.com/api/image/${data.tokenId}`
			}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}