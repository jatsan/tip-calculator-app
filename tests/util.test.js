const valid = require('../src/js/util')

describe('checkValidity function', () => {
  test('should return false if zero', () => {
    const result = valid(0)
    expect(result).toBe(false)
  })
  test('should return false if blank', () => {
    const result = valid('')
    expect(result).toBe(false)
  })
  test('should return false if negative', () => {
    const result = valid(-56)
    expect(result).toBe(false)
  })
  test('should return false if not whole number', () => {
    const result = valid(5.5)
    expect(result).toBe(false)
  })
  test('should return true if num is positive whole number', () => {
    const result = valid(5)
    expect(result).toBe(true)
  })
})
