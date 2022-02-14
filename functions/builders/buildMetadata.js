const colors = require('colors')

module.exports = async function buildMetadata(data) {
	try {
		const { description, name, attributes } = data

		let constructedAttributes = []

		for (var key in attributes) {
			if (attributes.hasOwnProperty(key)) {
				constructedAttributes.push({
					trait_type: key,
					value: attributes[key],
				})
			}
		}

		return {
			description,
			name,
			constructedAttributes,
			image: `https://titanbornes.herokuapp.com/api/images/${data.tokenId}`,
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
