function calculate(event) {
  const inputValue = event.target.value
  const expression = /\+|\-|\*|\//

  const numbers = inputValue.split(expression)
  // console.log(numbers)

  const numberA = Number(numbers[0].trim())
  const numberB = Number(numbers[1].trim())
  const operator = inputValue.match(expression)[0]

  const calculator = new Calculator()
  calculator.add(numberA)
  calculator.add(numberB)
  console.log(calculator.total)

  // console.log(operator)
}

document.getElementById('inputValue').addEventListener('change', calculate)