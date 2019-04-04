const sharp = require('sharp')
const { promisify } = require('util')
const fs = require('fs')

const { changeExt } = require('../helpers/changeExt')

const writeFile = promisify(fs.writeFile)

module.exports.webpImages = on =>
  on('jpg', async (file, filePath) => {
    const [
      webpImageRetina,
      webpImage,
      jpegImageRetina,
      jpegImage,
    ] = await Promise.all([
      sharp(file)
        .resize(800, 800)
        .webp()
        .toBuffer(),
      sharp(file)
        .resize(400, 400)
        .webp()
        .toBuffer(),
      sharp(file)
        .resize(800, 800)
        .jpeg()
        .toBuffer(),
      sharp(file)
        .resize(400, 400)
        .jpeg()
        .toBuffer(),
    ])

    const webpRetinaPath = changeExt(filePath, 'webp', '@2x')
    const webpPath = changeExt(filePath, 'webp')
    const jpegRetinaPath = changeExt(filePath, 'jpg', '@2x')
    await Promise.all([
      writeFile(webpRetinaPath, webpImageRetina),
      writeFile(webpPath, webpImage),
      writeFile(jpegRetinaPath, jpegImageRetina),
    ])

    return jpegImage
  })
