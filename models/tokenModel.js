const mongoose = require('mongoose')

const tokenSchema = mongoose.Schema(
	{
		owner: {
			type: String,
		},
		tokenId: {
			type: String,
		},
      faction: {
         type: String
      },
		fusionCount: {
			type: Number,
		},
      berserk: {
         type: Boolean
      },
		name: {
			type: String,
		},
		description: {
			type: String,
		},
      traits: {
         eyes: {
            type: Number
         },
         mask: {
            type: Number
         }
      }
	},
	{
		timestamps: true,
	}
)

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
