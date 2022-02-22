const asyncHandler = require('express-async-handler')
const colors = require('colors')
const axios = require('axios')
const url = require('url')
require('dotenv').config()
const path = require('path')
const buildImage = require('../functions/builders/buildImage')
const buildTraits = require('../functions/builders/buildTraits')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getImage = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const traits = await buildTraits(tokenId)

		const image = await buildImage(tokenId, traits)

		res.set({ 'Content-Type': traits.animated ? 'image/gif' : 'image/png' })
		res.send(image)
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getImage,
}
