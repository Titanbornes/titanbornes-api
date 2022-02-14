const express = require('express')
const router = express.Router()
const {
	getURI
} = require('../controllers/tokenController.js')

router.route('/:tokenId').get(getURI)

module.exports = router
