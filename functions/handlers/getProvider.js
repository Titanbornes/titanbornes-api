const { ethers, providers, utils, Wallet } = require('ethers')
require('dotenv').config()
const colors = require('colors')

module.exports = async function getProvider() {
	try {
		const network = 'rinkeby'

		const provider = new providers.InfuraProvider(
			network,
			process.env.ALCHEMY_KEY
		)

		// use private key for wallet
		const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

		return { network, provider, wallet }
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
