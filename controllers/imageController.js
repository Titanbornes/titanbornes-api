const asyncHandler = require('express-async-handler')
const colors = require('colors')
const axios = require('axios')
const url = require('url')
require('dotenv').config()
const path = require('path')
const buildTraits = require('../functions/builders/buildTraits')
const {
	buildAnimatedImage,
	buildStaticImage,
} = require('../functions/builders/buildImage')
const querySubgraph = require('../functions/helpers/querySubgraph')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getImage = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const tokenSubgraphData = await querySubgraph(tokenId)

		console.log(tokenSubgraphData)

		if (!tokenSubgraphData) {
			res.sendStatus(404)
		} else {
			const traits = await buildTraits(tokenId, tokenSubgraphData)

			const image = traits.animated
				? buildAnimatedImage(tokenId, traits)
				: await buildStaticImage(tokenId, traits)

			res.set({
				'Content-Type': traits.animated ? 'image/gif' : 'image/png',
			})
			res.send(image)
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getImage,
}
