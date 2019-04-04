const sharp = require('sharp')
const { promisify } = require('util')
const fs = require('fs')

const { changeExt } = require('../helpers/changeExt')

const writeFile = promisify(fs.writeFile)

module.exports.webpImages = on =>
  on('jpg', async (file, filePath) => {
    const webpImage = await sharp(file)
      .webp()
      .toBuffer()

    const newPath = changeExt(filePath, 'webp')
    writeFile(newPath, webpImage)

    return file
  })
