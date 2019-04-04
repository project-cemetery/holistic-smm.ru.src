const posthtml = require('posthtml')

const { changeExt } = require('../helpers/changeExt')

postHtmlPlugin = tree => {
  const parsedSrc = []
  return tree.match({ tag: 'img' }, i => {
    if (!i.attrs.src.includes('.jpg') || parsedSrc.includes(i.attrs.src)) {
      return i
    }

    parsedSrc.push(i.attrs.src)

    const webpSrc = `${changeExt(i.attrs.src, 'webp', '@2x')} 2x, ${changeExt(
      i.attrs.src,
      'webp',
    )} 1x`
    const jpegSrc = `${changeExt(i.attrs.src, 'jpg', '@2x')} 2x, ${changeExt(
      i.attrs.src,
      'jpg',
    )} 1x`

    return {
      tag: 'picture',
      content: [
        {
          tag: 'source',
          attrs: {
            srcset: webpSrc,
            type: 'image/webp',
          },
        },
        {
          tag: 'source',
          attrs: {
            srcset: jpegSrc,
            type: 'image/jpeg',
          },
        },
        i,
      ],
    }
  })
}

module.exports.picture = on =>
  on('html', async file =>
    posthtml([postHtmlPlugin])
      .process(file.toString())
      .then(result => result.html),
  )
