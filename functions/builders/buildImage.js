const GIFEncoder = require('gif-encoder-2')
const { Canvas, registerFont } = require('canvas-constructor/cairo')
const canvas = require('canvas')
const colors = require('colors')
const { readdir } = require('fs')
const { promisify } = require('util')
const path = require('path')

module.exports = {
	buildStaticImage: async function (tokenId, traits) {
		try {
			return new Canvas(793, 850)
				.printImage(base, 0, 0, 793, 850)
				.printImage(logo, 793 / 10, 850 / 1.4, 867 / 3, 480 / 3)
				.toBuffer()
		} catch (error) {
			console.error(`${error}`.red.inverse)
		}
	},
	buildAnimatedImage: async function (tokenId, traits) {
		try {
			const readdirAsync = promisify(readdir)

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
		} catch (error) {
			console.error(`${error}`.red.inverse)
		}
	},
}
