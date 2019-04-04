module.exports.changeExt = (filePath, newExt, additionalName = '') =>
  filePath.replace(/\.(\w+)$/gi, `${additionalName}.${newExt}`)
