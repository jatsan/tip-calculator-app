const tipCalculator = {
  billInit: 0,
  tipAmount: 0,
  numPeople: 0,
  tipTotal: 0,
  billTotal: 0,
  tipAmountPerPerson: 0,
  billTotalPerPerson: 0,
  calcTipTotal() {
    this.tipTotal = (this.billInit * (this.tipAmount / 100)).toFixed(2)
  },
  calcTipAmountPerPerson() {
    this.tipAmountPerPerson = (this.tipTotal / this.numPeople).toFixed(2)
  },
  calcBillTotal() {
    this.billTotal = (
      parseFloat(this.billInit) + parseFloat(this.tipTotal)
    ).toFixed(2)
  },
  calcBillTotalPerPerson() {
    this.billTotalPerPerson = (this.billTotal / this.numPeople).toFixed(2)
  },
  getTipAmountPerPerson() {
    return this.tipAmountPerPerson
  },
  getBillTotalPerPerson() {
    return this.billTotalPerPerson
  },
}

module.exports = tipCalculator
