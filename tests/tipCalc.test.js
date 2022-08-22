const tipCalculator = require('../src/js/tipCalc')

describe('Tip Calculator', () => {
  beforeEach(() => {
    const bill = 15
    const tipPercent = 10
    const ppl = 2
    tipCalculator.billInit = bill
    tipCalculator.tipAmount = tipPercent
    tipCalculator.numPeople = ppl
  })
  test('should return $1.50 tip given $15 bill & 10% tip', () => {
    const expected = tipCalculator.calcTipTotal()
    const result = '1.50'
    expect(expected).toBe(result)
  })
  test('should return $16.50 total bill given $15 bill & 10% tip', () => {
    const expected = tipCalculator.calcBillTotal()
    const result = '16.50'
    expect(expected).toBe(result)
  })
  test('should return $0.75 tip amount per person given $15 bill & 10% tip split 2 ways', () => {
    const expected1 = tipCalculator.calcTipAmountPerPerson()
    const expected2 = tipCalculator.getTipAmountPerPerson()
    const result = '0.75'
    expect(expected1).toBe(result)
    expect(expected2).toBe(result)
  })
  test('should return $8.25 total bill per person given $15 bill & 10% tip split 2 ways', () => {
    const expected1 = tipCalculator.calcBillTotalPerPerson()
    const expected2 = tipCalculator.getBillTotalPerPerson()
    const result = '8.25'
    expect(expected1).toBe(result)
    expect(expected2).toBe(result)
  })
})
