import '../scss/style.scss'
import logo from '../images/logo.svg'

const imgLogo = document.createElement('img')
imgLogo.src = logo
imgLogo.alt = 'Splitter Tip Calculator'
const header = document.querySelector('header')
header.append(imgLogo)
