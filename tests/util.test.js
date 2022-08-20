const checkValidity = require('../src/js/util')

describe('checkValidity function', () => {
  test('should return false if zero', () => {
    const result = !checkValidity(0)
    expect(result).toBe(false)
  })
  test('should return false if blank', () => {
    const result = !checkValidity('')
    expect(result).toBe(false)
  })
})
