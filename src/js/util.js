const addHeaderLogo = (img) => {
  const imgLogo = document.createElement('img')
  imgLogo.src = img
  imgLogo.alt = 'Splitter Tip Calculator'
  const header = document.querySelector('header')
  header.append(imgLogo)
}

const addDollarImg = (img) => {
  const imgDollar = document.createElement('img')
  imgDollar.src = img
  imgDollar.alt = ''
  imgDollar.ariaHidden = 'true'
  const dollarDiv = document.querySelector('.dollar_bill')
  dollarDiv.append(imgDollar)
}

const addPersonImg = (img) => {
  const imgPerson = document.createElement('img')
  imgPerson.src = img
  imgPerson.alt = ''
  imgPerson.ariaHidden = 'true'
  const personDiv = document.querySelector('.person')
  personDiv.append(imgPerson)
}

const checkValidity = (ele) => {
  if (ele.value === '' || ele.value === 0) {
    return false
  }
  return true
}

// eslint-disable-next-line object-curly-newline
export { addHeaderLogo, addDollarImg, addPersonImg, checkValidity }
