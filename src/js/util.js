const checkValidity = (ele) => {
  if (ele.value === '' || ele.value === 0) {
    return false
  }
  return true
}

export default checkValidity
