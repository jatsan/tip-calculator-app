const isValid = (elem) => {
  if (elem === '') return false
  if (elem <= 0) return false
  if (elem - Math.floor(elem) !== 0) return false
  return true
}

module.exports = isValid
