const { render } = require('prettyjson');
const data = require('./data')

const renderOpts = {
  keysColor: 'italic',
  stringColor: 'blue',
  multilineStringColor: 'rainbow',
  dashColor: 'black',
  defaultIndentation: 4,
}

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)

