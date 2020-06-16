const querystring = require('querystring')

/**
 * @param {Buffer|string} input
 * @return {object}
 */
function urldecodeLatin1 (input) {
  if (input instanceof Buffer) {
    input = input.toString('latin1')
  }
  const pageSize = 64
  const prefixOffset = 0xC2
  let output = ''
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '%') {
      if (i + 2 >= input.length) {
        throw new Error('invalid input (incomplete)')
      }
      let charCode = parseInt(input.substr(i + 1, 2), 16)
      const pageNr = Math.floor(charCode / pageSize) - 2 // first page is 128 byte long (2xpageSize)
      if (pageNr >= 0) {
        charCode -= pageSize * pageNr
        output += '%' + (prefixOffset + pageNr).toString(16).toUpperCase() // page prefix
      }
      output += '%' + (charCode < 16 ? '0' : '') + charCode.toString(16).toUpperCase()
      i += 2
    } else {
      output += input[i]
    }
  }
  return querystring.parse(output)
}
module.exports = urldecodeLatin1
