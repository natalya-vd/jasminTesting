function calculate(value) {
  const inputValue = value
  const expression = /\+|\-|\*|\//

  const numbers = inputValue.split(expression)
  const numberA = Number(numbers[0])
  const numberB = Number(numbers[1])

  const operation = inputValue.match(expression)
  if(isNaN(numberA) ||isNaN(numberB) || operation === null) {
    updateResult('Expression not recognized')
    return
  }

  const operator = operation[0]

  const calculator = new Calculator()
  calculator.add(numberA)
  
  let result = 0
  switch(operator) {
    case '+':
      result = calculator.add(numberB)
      break
    case '-':
      result = calculator.subtract(numberB)
      break
    case '*':
      result = calculator.multiply(numberB)
      break
    case '/':
      result = calculator.divide(numberB)
      break
  }

  updateResult(result)
}

function updateResult(result) {
  const element = document.getElementById('result')
  if(element) {
    element.innerText = result
  }
}

function showVersion() {
  const calculator = new Calculator()

  const element = document.getElementById('version')
  if(element) {
    element.innerText = calculator.version
  }
}

document.getElementById('inputValue') && document.getElementById('inputValue').addEventListener('change', (event) => calculate(event.target.value))