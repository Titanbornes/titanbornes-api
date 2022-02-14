const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const url = require('url')
require('dotenv').config()
const path = require('path')
const buildArtwork = require('../functions/buildArtwork')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getImage = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const image = await buildArtwork(tokenId)

		res.set({ 'Content-Type': 'image/png' })
		res.send(image)
	} catch (error) {
		console.log(error)
	}
})

module.exports = {
	getImage,
}
