const tipCalculator = require('../src/js/tipCalc')

describe('Tip Calculator', () => {
  beforeEach(() => {
    tipCalculator.billInit = 15
    tipCalculator.tipAmount = 10
    tipCalculator.numPeople = 2
  })

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
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
    const expected = tipCalculator.calcTipAmountPerPerson()
    const result = '0.75'
    expect(expected).toBe(result)
  })
  test('should call calcTipAmountPerPerson method when retrieving tipAmountPerPerson', () => {
    const calcTipSpy = jest.spyOn(tipCalculator, 'calcTipAmountPerPerson')
    tipCalculator.getTipAmountPerPerson()
    expect(calcTipSpy).toHaveBeenCalled()
  })
  test('should return $8.25 total bill per person given $15 bill & 10% tip split 2 ways', () => {
    const expected = tipCalculator.calcBillTotalPerPerson()
    const result = '8.25'
    expect(expected).toBe(result)
  })
  test('should call calcTipAmountPerPerson method when retrieving billAmountPerPerson', () => {
    const calcBillSpy = jest.spyOn(tipCalculator, 'calcBillTotalPerPerson')
    tipCalculator.getBillTotalPerPerson()
    expect(calcBillSpy).toHaveBeenCalled()
  })
  test('should return an array with [0.75, 8.25] given $15 bill & 10% tip split 2 ways', () => {
    const expected = tipCalculator.updateInfo()
    const result = ['0.75', '8.25']
    expect(expected).toStrictEqual(result)
  })
  test('should return an array with [0.00, 0.00] given number of people is zero', () => {
    tipCalculator.numPeople = 0
    const expected = tipCalculator.updateInfo()
    const result = ['0.00', '0.00']
    expect(expected).toStrictEqual(result)
  })
})
