const posthtml = require('posthtml')

const { changeExt } = require('../helpers/changeExt')

postHtmlPlugin = tree => {
  const parsedSrc = []
  return tree.match({ tag: 'img' }, i => {
    if (!i.attrs.src.includes('.jpg') || parsedSrc.includes(i.attrs.src)) {
      return i
    }

    parsedSrc.push(i.attrs.src)

    return {
      tag: 'picture',
      content: [
        {
          tag: 'source',
          attrs: {
            srcset: changeExt(i.attrs.src, 'webp'),
            type: 'image/webp',
          },
        },
        {
          tag: 'source',
          attrs: {
            srcset: i.attrs.src,
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
