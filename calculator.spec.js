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

  // not Matcher
  it('should have unique calculator object', () => {
    const calculator1 = new Calculator()
    const calculator2 = new Calculator()

    expect(calculator1).not.toBe(calculator2)
  })

  // toBeUndefined & toBeDefined matcher
  it('should have common methods', () => {
    const calculator = new Calculator()

    // expect(calculator.add).not.toBeUndefined()
    expect(calculator.add).toBeDefined()
    expect(calculator.subtract).toBeDefined()
    expect(calculator.multiply).toBeDefined()
    expect(calculator.divide).toBeDefined()
  })

  // toBeNull matcher
  it('can overwrite total value', () => {
    const calculator = new Calculator()
    calculator.total = null

    expect(calculator.total).toBeNull()
  })

  //toContain matcher
  it('should have the calculator constructor', () => {
    const calculator = new Calculator()
    const arr = [1, 2, 3, 4]

    expect(arr).toContain(3)
    expect(calculator.constructor.name).toContain('Calc')
  })

  // toBeNaN matcher
  it('doesnot handle NaN for multiply', () => {
    const calculator = new Calculator()
    calculator.total = 10

    calculator.multiply('a')

    expect(calculator.total).toBeNaN()
  })
})