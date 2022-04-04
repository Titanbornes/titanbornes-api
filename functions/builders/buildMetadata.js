const colors = require('colors')

module.exports = async function buildMetadata(tokenId, traits) {
	try {
		let attributes = []

		for (let key in traits) {
			if (traits.hasOwnProperty(key)) {
				attributes.push({
					trait_type: key,
					value: traits[key].name ? traits[key].name : traits[key],
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
