const { ethers } = require('ethers')
const contractABI = require('../../data/abi.json')

module.exports = async function getContract(signer, contractAddress) {
	return new ethers.Contract(contractAddress, contractABI.abi, signer)
}
