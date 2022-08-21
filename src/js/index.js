import '../scss/style.scss'
import * as util from './util'
import tipCalculator from './tipCalc'

const initApp = (tipCalc) => {
  const calc = tipCalc
  const resetBtn = document.querySelector('.resetBtn')
  const billInput = document.querySelector('.bill')
  billInput.addEventListener('blur', () => {
    calc.billInit = Number(billInput.value).toFixed(2)
    if (calc.billInit <= 0) util.updateBillDisplay(null)
    else util.updateBillDisplay(calc.billInit)
  })

  const btns = document.querySelector('.tip_btns')
  btns.addEventListener('click', (event) => {
    let tipSelected
    const buttons = document.querySelectorAll('.tipBtn')
    const custBtn = document.querySelector('.tip_custom')
    if (event.target.nodeName === 'BUTTON') {
      custBtn.classList.remove('selected')
      buttons.forEach((element) => {
        element.classList.remove('selected')
      })
      event.target.classList.add('selected')
      tipSelected = document.querySelector('.tipBtn.selected')
      calc.tipAmount = tipSelected.value
    }

    if (event.target.nodeName === 'INPUT') {
      buttons.forEach((element) => {
        element.classList.remove('selected')
      })
      event.target.classList.add('selected')
      tipSelected = document.querySelector('.tip_custom.selected')

      tipSelected.addEventListener('input', () => {
        calc.tipAmount = tipSelected.value
      })
    }
  })

  const inpObj = document.querySelector('.ppl')
  inpObj.addEventListener('blur', () => {
    const error = document.querySelector('.calc_input__err-label')

    if (!util.valid(inpObj.value)) {
      error.style.visibility = 'visible'
      inpObj.style.border = '0.0625rem solid red'
      calc.numPeople = 0
      util.updateNumOfPeopleDisplay(calc.numPeople)
    } else {
      error.style.visibility = 'hidden'
      inpObj.style.border = 'none'
      calc.numPeople = inpObj.value
      util.updateNumOfPeopleDisplay(calc.numPeople)
    }

    calc.calcTipTotal()
    calc.calcTipAmountPerPerson()
    calc.calcBillTotal()
    calc.calcBillTotalPerPerson()

    const tipAmt = calc.getTipAmountPerPerson()
    const billAmt = calc.getBillTotalPerPerson()

    util.updateOutputDisplay(tipAmt, billAmt)
  })

  resetBtn.addEventListener('click', () => {
    util.resetAllDisplays()
  })
}

initApp(tipCalculator)
