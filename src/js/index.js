import '../scss/style.scss'
import checkValidity from './util'

const initApp = () => {
  const btns = document.querySelector('.tip_btns')
  btns.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
      const buttons = document.querySelectorAll('.tipBtn')
      buttons.forEach((element) => {
        element.classList.remove('selected')
      })
      event.target.classList.add('selected')
    }
  })

  const inpObj = document.querySelector('.ppl')

  inpObj.addEventListener('blur', () => {
    const error = document.querySelector('.calc_input__err-label')

    error.style.visibility = 'hidden'
    inpObj.style.border = 'none'

    if (!checkValidity(inpObj)) {
      error.style.visibility = 'visible'
      inpObj.style.border = '0.0625rem solid red'
    }
  })
}

initApp()
