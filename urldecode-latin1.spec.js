const urldecodeLatin1 = require('./urldecode-latin1')

describe('urldecodeLatin1', () => {
  it('should be defined', () => {
    expect(urldecodeLatin1).toBeInstanceOf(Function)
  })
  it('decode from Buffer should resolve', () => {
    const b = Buffer.from([0x6B, 0x3D, 0xDF])
    expect(urldecodeLatin1(b).k).toBe('ß')
  })
  it('decode from string should resolve', () => {
    const s = 'k=%61%0A%AE%DF%FF'
    expect(urldecodeLatin1(s).k).toBe('a\n®ßÿ')
  })
  it('decode from incomplete string should throw error', () => {
    let s = 'k=%61%AE%D'
    expect(() => urldecodeLatin1(s)).toThrow(/incomplete/)
    s = 'k=%61%AE%'
    expect(() => urldecodeLatin1(s)).toThrow(/incomplete/)
  })
})
