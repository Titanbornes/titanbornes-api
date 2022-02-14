const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema(
	{
		owner: {
			type: String,
		},
		tokenId: {
			type: String,
		},
		name: {
			type: String,
		},
		description: {
			type: String,
		},
		attributes: {
			faction: {
				type: String,
			},
			fusionCount: {
				type: Number,
				default: 0,
			},
			berserk: {
				type: Boolean,
				default: true,
			},
			generation: {
				type: Number,
				default: 0,
			},
			background: {
				type: String,
				default: 'Maroon'
			},
			eyes: {
				type: String,
				default: 'Black',
			},
			mask: {
				type: String,
				default: 'None',
			},
		},
		burnt: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
