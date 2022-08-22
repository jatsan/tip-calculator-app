const updateBillDisplay = (val) => {
  document.getElementById('bill').value = val
}

const updateCustomBtnDisplay = (val) => {
  document.getElementById('other').value = val
}

const updateNumOfPeopleDisplay = (val) => {
  document.getElementById('ppl').value = val
}

const updateOutputDisplay = (info) => {
  document.querySelector('.tipAmt_display').innerHTML = `$${info[0]}`
  document.querySelector('.totalAmt_display').innerHTML = `$${info[1]}`
}

const resetAllDisplays = (tipSelected) => {
  updateBillDisplay(null)
  updateCustomBtnDisplay(null)
  updateNumOfPeopleDisplay(null)
  updateOutputDisplay(['0.00', '0.00'])
  tipSelected.classList.remove('selected')
}

module.exports = {
  updateBillDisplay,
  updateCustomBtnDisplay,
  updateNumOfPeopleDisplay,
  updateOutputDisplay,
  resetAllDisplays,
}
