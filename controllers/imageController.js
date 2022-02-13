const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const Token = require('../models/tokenModel')
const axios = require('axios')
const url = require('url')
require('dotenv').config()
const path = require('path')

// @desc    Connect a new user
// @route   POST /api/users/connect
// @access  Public
const getImage = asyncHandler(async (req, res) => {
	const tokenId = req.params.tokenId

	// const token = await Token.findOne({
	// 	tokenId
	// })
	res.sendFile(path.resolve(`public/images/${tokenId}.png`));
})

module.exports = {
	getImage
}
