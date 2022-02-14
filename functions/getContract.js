import { ethers } from 'ethers'

const contractABI = require('../utils/abi.json')

export async function getContract(signer, contractAddress) {
	return new ethers.Contract(contractAddress, contractABI, signer)
}
