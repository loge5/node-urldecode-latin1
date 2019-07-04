const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const urldecodeLatin1 = require('./urldecode-latin1')

describe('urldecodeLatin1', () => {
  it('should be defined', () => {
    expect(urldecodeLatin1).to.be.a('Function')
  })
  it('decode from Buffer should resolve', () => {
    let b = Buffer.from([0x6B, 0x3D, 0xDF])
    expect(urldecodeLatin1(b).k).equals('ß')
  })
  it('decode from string should resolve', () => {
    let s = 'k=%61%AE%DF%FF'
    expect(urldecodeLatin1(s).k).equals('a®ßÿ')
  })
  it('decode from incomplete string should throw error', () => {
    let s = 'k=%61%AE%D'
    expect(() => urldecodeLatin1(s)).to.throw(/incomplete/)
    s = 'k=%61%AE%'
    expect(() => urldecodeLatin1(s)).to.throw(/incomplete/)
  })
})
