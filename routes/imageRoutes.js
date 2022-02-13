const express = require('express')
const router = express.Router()
const {
	getImage
} = require('../controllers/imageController.js')

router.route('/:tokenId').get(getImage)

module.exports = router
