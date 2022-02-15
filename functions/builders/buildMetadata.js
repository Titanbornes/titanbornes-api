const colors = require('colors')
const { tempTokenURIs } = require('../handlers/createTempData')

module.exports = async function buildMetadata(tokenId, data) {
	try {
		if (tempTokenURIs[tokenId]) {
			return tempTokenURIs[tokenId]
		} else {
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

			const tokenURI =  {
				description,
				name,
				attributes,
				image: `https://titanbornes.herokuapp.com/api/images/${data.tokenId}`,
			}

			tempTokenURIs[tokenId] = tokenURI

			return tokenURI
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
