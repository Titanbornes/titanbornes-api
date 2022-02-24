const { ethers } = require('ethers')
const contractABI = require('../../data/abi.json')
const colors = require('colors')

module.exports = async function getContract(signer, contractAddress) {
	try {
		return new ethers.Contract(contractAddress, contractABI.abi, signer)
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
