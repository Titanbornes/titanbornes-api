const path = require('path')
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')

const buildTraits = require('./buildTraits')

module.exports = async function buildArtwork(tokenId) {
	try {
		const traits = await buildTraits(tokenId)
		console.log(traits)

		const eagle = await canvas.loadImage(
			path.resolve('public/images/eagle.png')
		)

		const apple = await canvas.loadImage(
			path.resolve('public/images/apple.png')
		)

		return new Canvas(2583, 2010)
			.printImage(eagle, 0, 0, 2583, 2010)
			.printImage(apple, 0, 0, 1010, 963)
			.toBuffer()
	} catch (error) {
		console.log(error)
	}
}
