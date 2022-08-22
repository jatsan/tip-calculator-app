import '../scss/style.scss'
import isValid from './util'
import * as display from './display'

const tipCalc = require('./tipCalc')

const resetBtn = document.querySelector('.resetBtn')
const billInput = document.querySelector('.bill')
const tipSection = document.querySelector('.tip_btns')
const buttons = document.querySelectorAll('.tipBtn')
const custTipInput = document.querySelector('.tip_custom')
const pplInput = document.querySelector('.ppl')
const error = document.querySelector('.calc_input__err-label')
let tipSelected

billInput.addEventListener('blur', () => {
  tipCalc.billInit = Number(billInput.value).toFixed(2)
  if (tipCalc.billInit <= 0) display.updateBillDisplay(null)
  if (tipCalc.billInit > 0) display.updateBillDisplay(tipCalc.billInit)
  display.updateOutputDisplay(tipCalc.updateInfo())
})

tipSection.addEventListener('click', (event) => {
  if (event.target.nodeName === 'BUTTON') {
    custTipInput.classList.remove('selected')
    buttons.forEach((element) => {
      element.classList.remove('selected')
    })
    event.target.classList.add('selected')
    tipSelected = document.querySelector('.tipBtn.selected')
    tipCalc.tipAmount = tipSelected.value
    display.updateOutputDisplay(tipCalc.updateInfo())
  }
  if (event.target.nodeName === 'INPUT') {
    buttons.forEach((element) => {
      element.classList.remove('selected')
    })
    event.target.classList.add('selected')
    tipSelected = document.querySelector('.tip_custom.selected')

    tipSelected.addEventListener('input', () => {
      tipCalc.tipAmount = tipSelected.value
      display.updateOutputDisplay(tipCalc.updateInfo())
    })
  }
})

pplInput.addEventListener('input', () => {
  if (!isValid(pplInput.value)) {
    error.style.visibility = 'visible'
    pplInput.style.border = '0.0625rem solid red'
    tipCalc.numPeople = null
    display.updateNumOfPeopleDisplay(tipCalc.numPeople)
    display.updateOutputDisplay(tipCalc.updateInfo())
  } else {
    error.style.visibility = 'hidden'
    pplInput.style.border = 'none'
    tipCalc.numPeople = pplInput.value
    display.updateNumOfPeopleDisplay(tipCalc.numPeople)
    display.updateOutputDisplay(tipCalc.updateInfo())
  }
})

resetBtn.addEventListener('click', () => {
  display.resetAllDisplays(tipSelected)
})
