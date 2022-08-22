const isValid = require('../src/js/util')

describe('Check Validation', () => {
  test('should return false if zero', () => {
    const result = isValid(0)
    expect(result).toBe(false)
  })
  test('should return false if blank', () => {
    const result = isValid('')
    expect(result).toBe(false)
  })
  test('should return false if negative', () => {
    const result = isValid(-56)
    expect(result).toBe(false)
  })
  test('should return false if not whole number', () => {
    const result = isValid(5.5)
    expect(result).toBe(false)
  })
  test('should return true if num is positive whole number', () => {
    const result = isValid(5)
    expect(result).toBe(true)
  })
})
