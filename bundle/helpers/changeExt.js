module.exports.changeExt = (filePath, newExt) =>
  filePath.replace(/\.(\w+)$/gi, `.${newExt}`)
