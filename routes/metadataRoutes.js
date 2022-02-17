const express = require('express')
const router = express.Router()
const {
	getMetadata
} = require('../controllers/metadataController.js')

router.route('/:tokenId').get(getMetadata)

module.exports = router
