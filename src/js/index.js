import '../scss/style.scss'
import logo from '../images/logo.svg'
import dollar from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import { addHeaderLogo, addDollarImg, addPersonImg } from './util'

const initApp = () => {
  addHeaderLogo(logo)
  addDollarImg(dollar)
  addPersonImg(person)
}

initApp()
