const asyncHandler = require('express-async-handler')
const colors = require('colors')
const url = require('url')
const path = require('path')
const buildMetadata = require('../functions/builders/buildMetadata')
const querySubgraph = require('../functions/helpers/querySubgraph')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getMetadata = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const tokenSubgraphData = await querySubgraph(tokenId)

		if (!tokenSubgraphData) {
			res.sendStatus(404)
		} else {
			res.json(await buildMetadata(tokenId, tokenSubgraphData))
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getMetadata,
}
