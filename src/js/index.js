import '../scss/style.scss'
import logo from '../images/logo.svg'
import dollar from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import {
  addHeaderLogo,
  addDollarImg,
  addPersonImg,
  checkValidity,
} from './util'

const initApp = () => {
  addHeaderLogo(logo)
  addDollarImg(dollar)
  addPersonImg(person)

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
    const error = document.querySelector('.calc_input___err-label')

    if (!checkValidity(inpObj)) {
      error.style.visibility = 'visible'
      inpObj.style.border = '0.0625rem solid red'
    } else {
      error.style.visibility = 'hidden'
      inpObj.style.border = 'none'
    }
  })
}

initApp()
