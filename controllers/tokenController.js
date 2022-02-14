const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const axios = require('axios')
const colors = require('colors')
const url = require('url')
require('dotenv').config()
const path = require('path')
const Token = require('../models/tokenModel')
const buildTraits = require('../functions/builders/buildTraits')
const buildMetadata = require('../functions/builders/buildMetadata')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getURI = asyncHandler(async (req, res) => {
	try {
		const tokenId = req.params.tokenId

		const data = await Token.findOne({
			tokenId,
		})
		
		res.json(await buildMetadata(data))
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
})

module.exports = {
	getURI,
}
