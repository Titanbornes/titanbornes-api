const GIFEncoder = require('gif-encoder-2')
const { Canvas } = require('canvas-constructor/cairo')
const canvas = require('canvas')
const colors = require('colors')
const { createWriteStream, readdir } = require('fs')
const { promisify } = require('util')
const path = require('path')

module.exports = async function buildImage(tokenId, traits) {
	try {
		if (traits.animated) {
			const readdirAsync = promisify(readdir)
			const imagesFolder = path.resolve('public/images/numbers')

			const files = await readdirAsync(imagesFolder)

			const encoder = new GIFEncoder(684, 721, 'octree')
			encoder.setDelay(200)
			encoder.start()

			const genCanvas = canvas.createCanvas(684, 721)
			const ctx = genCanvas.getContext('2d')

			for (const file of files) {
				await new Promise((resolveFrame) => {
					const image = new canvas.Image()
					image.onload = () => {
						ctx.drawImage(image, 0, 0)
						encoder.addFrame(ctx)
						resolveFrame()
					}
					image.src = path.join(imagesFolder, file)
				})
			}

			encoder.finish()
			return encoder.out.getData()
		} else {
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
		}
	} catch (error) {
		console.error(`${error}`.red.inverse)
	}
}
