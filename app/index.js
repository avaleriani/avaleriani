const { render } = require('prettyjson');
const data = require('./data')

const renderOpts = {
  dashColor: 'yellow',
  keysColor: 'blue',
  stringColor: 'red'
}

module.exports = ({ json }) => json ? JSON.stringify(data) : render(data, renderOpts)

