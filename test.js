var Mocha = require('mocha')
var mocha = new Mocha({})
mocha.addFile('urldecode-latin1.spec')
mocha.run()
