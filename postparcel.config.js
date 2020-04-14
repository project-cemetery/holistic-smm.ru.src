const { inlineCss } = require('./bundle/postparcel/inlineCss');
const { webpImages } = require('./bundle/postparcel/webpImages');
const { picture } = require('./bundle/postparcel/picture');

module.exports = {
  plugins: [inlineCss, webpImages, picture],
};
