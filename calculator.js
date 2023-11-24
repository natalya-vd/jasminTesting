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
    // Здесь запрос на сервер за данными
    return new Promise((response) => {
      setTimeout(() => {
        response('0.2')
      }, 2000)
    })
  },
  configurable: true,
  enumerable: true
})