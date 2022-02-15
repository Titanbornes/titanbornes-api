const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const colors = require('colors')
const axios = require('axios')
const url = require('url')
require('dotenv').config()
const path = require('path')
const buildImage = require('../functions/builders/buildImage')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getImage = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const image = await buildImage(tokenId)

		res.set({ 'Content-Type': 'image/png' })
		res.send(image)
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getImage,
}
