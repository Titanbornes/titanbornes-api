const { ethers, providers, utils, Wallet } = require('ethers')
const getContract = require('../helpers/getContract')
const getProvider = require('./getProvider')
require('dotenv').config()

module.exports = async function eventListener() {
	try {
		const provider = await getProvider()

		let fetchedContract = await getContract(
			provider.wallet,
			'0x075c7959b2ac1e2b09c8de29d3e9df8a2b5b2a66'
		)

		fetchedContract.on('Transfer', (from, to, tokenId) => {
			console.log("Transfer");
		})
	} catch (error) {
		console.log(error)
	}
}
