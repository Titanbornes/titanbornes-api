const asyncHandler = require('express-async-handler')
const axios = require('axios')
const colors = require('colors')
const url = require('url')
require('dotenv').config()
const path = require('path')
const buildMetadata = require('../functions/builders/buildMetadata')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getMetadata = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const result = await axios.post(
			'https://api.thegraph.com/subgraphs/name/accretence/foundationsubgraph',
			{
				query: `{
					tokens(where:{tokenID: ${tokenId}}) {
						id
						tokenID
						generation
						fusionCount
						owner {
							id
						}
					}
				}`,
			}
		)

		data = result.data.data.tokens[0]

		res.json(await buildMetadata(tokenId, data))
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getMetadata,
}
