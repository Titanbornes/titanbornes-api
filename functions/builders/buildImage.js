const path = require('path')
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')
const colors = require('colors')

module.exports = async function buildImage(tokenId) {
	try {
		
			const base = await canvas.loadImage(
				path.resolve('public/images/base.png')
			)

			const logo = await canvas.loadImage(
				path.resolve('public/images/logo.png')
			)

			const image = new Canvas(793, 850)
				.printImage(base, 0, 0, 793, 850)
				.printImage(logo, 793 / 10, 850 / 1.4, 867 / 3, 480 / 3)
				.toBuffer()

			return image
		
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
