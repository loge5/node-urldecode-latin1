const Mocha = require('mocha')
const mocha = new Mocha({})
mocha.addFile('urldecode-latin1.spec')
mocha.run()
