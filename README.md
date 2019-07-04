[![npm version](https://badge.fury.io/js/urldecode-latin1.svg)](http://badge.fury.io/js/urldecode-latin1)
[![Dependencies](https://david-dm.org/loge5/node-urldecode-latin1.svg)](https://david-dm.org/loge5/node-urldecode-latin1) 
[![devDependencies Status](https://david-dm.org/loge5/node-urldecode-latin1/dev-status.svg)](https://david-dm.org/loge5/node-urldecode-latin1?type=dev)

# urldecode for latin1 / ISO-8859-1

*aka: Percent-encoding or URL-encoding*

The standard methods "decodeURI" or "querystring" can't decode latin1 chars like `%DF` (ß), this decoder can.

How it works: replace latin1 encodings with its utf-8 counterpart, than use `querystring` (node.js).

# Features

* Decode `string` and `Buffer`
* TODO: encoding

# Install

```npm install urldecode-latin1```

# Usage

```javascript
const urldecodeLatin1 = require('urldecode-latin1')

// from string
let stringEncoded = "k=%61%AE%DF%FF"
let stringDecoded = urldecodeLatin1(inputString) // => {k: 'a®ßÿ'}


// from buffer (when input has un-encoded latin1 chars)
let bufferEncoded = Buffer.from([0x6B, 0x3D, 0xDF])
let stringDecoded = urldecodeLatin1(b) // => { k: 'ß' }
```


# Contributing / Development

## Style

[https://github.com/standard/standard](https://github.com/standard/standards)

## Testing

Run mocha tests:

`npm test`

Check code coverage (creates "./coverage/index.html"):

`npm run-script cover`
