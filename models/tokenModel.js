const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema(
	{
		owner: {
			type: String,
		},
		burnt: {
			type: Boolean,
			default: false
		},
		tokenId: {
			type: String,
		},
		faction: {
			type: String,
		},
		fusionCount: {
			type: Number,
			default: 0,
		},
		berserk: {
			type: Boolean,
			default: true
		},
		name: {
			type: String,
		},
		description: {
			type: String,
		},
		traits: {
			eyes: {
				type: Number,
			},
			mask: {
				type: Number,
			},
		},
	},
	{
		timestamps: true,
	}
)

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
