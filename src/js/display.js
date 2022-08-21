const updateBillDisplay = (val) => {
  document.getElementById('bill').value = val
}

const updateCustomBtnDisplay = (val) => {
  document.getElementById('other').value = val
}

const updateNumOfPeopleDisplay = (val) => {
  document.getElementById('ppl').value = val
}

const updateOutputDisplay = (tip, bill) => {
  document.querySelector('.tipAmt_display').innerHTML = `$${tip}`
  document.querySelector('.totalAmt_display').innerHTML = `$${bill}`
}

const resetAllDisplays = () => {
  updateBillDisplay(null)
  updateCustomBtnDisplay(null)
  updateNumOfPeopleDisplay(null)
  updateOutputDisplay((0).toFixed(2), (0).toFixed(2))
}

module.exports = {
  updateBillDisplay,
  updateCustomBtnDisplay,
  updateNumOfPeopleDisplay,
  updateOutputDisplay,
  resetAllDisplays,
}
