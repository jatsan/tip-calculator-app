const tipCalculator = {
  billInit: 0,
  tipAmount: 0,
  numPeople: 0,
  tipTotal: 0,
  billTotal: 0,
  tipAmountPerPerson: 0,
  billTotalPerPerson: 0,
  calcTipTotal() {
    return (this.billInit * (this.tipAmount / 100)).toFixed(2)
  },
  calcTipAmountPerPerson() {
    return (parseFloat(this.calcTipTotal()) / this.numPeople).toFixed(2)
  },
  calcBillTotal() {
    return (
      parseFloat(this.billInit) + parseFloat(this.calcTipTotal())
    ).toFixed(2)
  },
  calcBillTotalPerPerson() {
    return (parseFloat(this.calcBillTotal()) / this.numPeople).toFixed(2)
  },
  getTipAmountPerPerson() {
    return this.calcTipAmountPerPerson()
  },
  getBillTotalPerPerson() {
    return this.calcBillTotalPerPerson()
  },
}

module.exports = tipCalculator
