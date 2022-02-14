const path = require('path')
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')
const colors = require('colors')
const buildTraits = require('./buildTraits')

module.exports = async function buildArtwork(tokenId) {
	try {
		const traits = await buildTraits(tokenId)

		const base = await canvas.loadImage(
			path.resolve('public/images/base.png')
		)

		const logo = await canvas.loadImage(
			path.resolve('public/images/logo.png')
		)

		return new Canvas(793, 850)
			.printImage(base, 0, 0, 793, 850)
			.printImage(logo, 793 / 10, 850 / 1.4, 867 / 3, 480 / 3)
			.toBuffer()
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
