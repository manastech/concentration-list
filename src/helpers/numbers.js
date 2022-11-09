export const formatNumber = (value = 0) => {
  if(countSignificantDigits(value) === countDigits(value)) return value
  return Number.parseFloat(value).toExponential()
}

export const countDigits = (value = 0) => value.toString().replace(/\./g, '').length

export const countSignificantDigits = (value = 0) => value.toExponential().replace(/^([0-9]+)\.?([0-9]+)?e[\+\-0-9]*$/g, '$1$2').length