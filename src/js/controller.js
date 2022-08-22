export default function doTipCalculations(tcObj) {
  const tc = tcObj

  tc.calcTipTotal()
  tc.calcTipAmountPerPerson()
  tc.calcBillTotal()
  tc.calcBillTotalPerPerson()
}
