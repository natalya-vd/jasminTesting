const CustomMatcher = {
  toBeCalculator: function () {
    return {
      compare: function (actual, expected) {
        const result = {
          pass: false,
          message: ''
        }

        if(actual instanceof Calculator) {
          result.pass = true
          result.message = `Expected ${JSON.stringify(actual)} not to be instance of Calculator`
        } else {
          result.message = `Expected ${actual} to be instance of Calculator`
        }

        return result
      }
    }
  }
}