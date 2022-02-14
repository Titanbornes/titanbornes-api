const colors = require('colors')

module.exports = async function buildMetadata(data) {
	try {
		const { description, name, attributes: raw } = data

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
			description,
			name,
			attributes,
			image: `https://titanbornes.herokuapp.com/api/images/${data.tokenId}`,
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
