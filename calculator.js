class ArithmeticError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ArithmeticError'
  }
}
class BadRequestError extends Error {
  constructor(message) {
    super(message)
    this.name = 'BadRequestError'
  }
}

function Calculator() {
  this.total = 0
}

Calculator.prototype.add = function(number) {
  return this.total += number 
}

Calculator.prototype.subtract = function(number) {
  return this.total -= number
}

Calculator.prototype.multiply = function(number) {
  return this.total *= number
}

Calculator.prototype.divide = function(number) {
  if(number === 0) {
    throw new ArithmeticError('Number cannot be zero')
  }
  return this.total /= number
}

Object.defineProperty(Calculator.prototype, 'version', {
  get: function () {
    return fetch('https://gist.githubusercontent.com/natalya-vd/ae9e15229f903349f72d655730e55ef1/raw/9e9c4fe06115a236a4bcc97f08972c95806fa3cf/version.json')
      .then((result) => {
        return result.json()
      })
      .then((jsonData) => {
        return jsonData.version
      })
  },
  configurable: true,
  enumerable: true
})