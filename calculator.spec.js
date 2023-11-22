// describe - набор тестов
// xdescribe('test group', () => {}) Отключить группу тестов

describe('Calculator.js', () => {
  //it - Описание одного теста
  // it('name', () => {
    // expect - ожидание. В одном тесте их может быть несколько. Тест считается пройденным, если все expect true
    // expect 5+5 to be 10
    // expect(5+5).toBe(10) -> true
    // expect(5+5).toBe(9)  -> false
  // })

  // xit('test', () => {}) // Отключить тест. Тест не будет выполняться

  it('should add number to the total', () => {
    const calculator = new Calculator()
    calculator.add(5)

    expect(calculator.total).toBe(5)
  })

  it('should subtract number from total', () => {
    const calculator = new Calculator()
    calculator.total = 30

    calculator.subtract(5)

    expect(calculator.total).toBe(25)
  })

  it('should multiply number with the total', () => {
    const calculator = new Calculator()
    calculator.total = 10

    calculator.multiply(2)

    expect(calculator.total).toBe(20)
  })

  it('should divide number by the total', () => {
    const calculator = new Calculator()
    calculator.total = 10

    calculator.divide(2)

    expect(calculator.total).toBe(5)
  })

  //ToBe Matcher (===) - для примитивных типов
  it('should initialize the total', () => {
    const calculator = new Calculator()

    expect(calculator.total).toBe(0)
  })

  //ToEqual Matcher - глубокое сравнение, для объектов
  it('should initialize the calculator', () => {
    const calculator1 = new Calculator()
    const calculator2 = new Calculator()

    // calculator1.total = '0' -> expect false

    expect(calculator1).toEqual(calculator2)
  })

  // toBeTruthy & toBeFalsy Matchers - истинное и ложное значение в логическом контексте
  it('toBeTruthy & toBeFalsy', () => {
    const calculator1 = new Calculator()
    const calculator2 = new Calculator()

    expect(calculator1.total).toBeFalsy() // -> true
    expect(calculator1).toBeTruthy() // -> true
    expect(calculator2).toBeTruthy() // -> true
    // expect(calculator2).toBeFalsy() //-> false
  })
})