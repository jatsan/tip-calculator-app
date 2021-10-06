export const addHeaderLogo = (img) => {
  const imgLogo = document.createElement('img')
  imgLogo.src = img
  imgLogo.alt = 'Splitter Tip Calculator'
  const header = document.querySelector('header')
  header.append(imgLogo)
}

export const addDollarImg = (img) => {
  const imgDollar = document.createElement('img')
  imgDollar.src = img
  imgDollar.alt = ''
  imgDollar.ariaHidden = 'true'
  const dollarDiv = document.querySelector('.dollar_bill')
  dollarDiv.append(imgDollar)
}

export const addPersonImg = (img) => {
  const imgPerson = document.createElement('img')
  imgPerson.src = img
  imgPerson.alt = ''
  imgPerson.ariaHidden = 'true'
  const personDiv = document.querySelector('.person')
  personDiv.append(imgPerson)
}
