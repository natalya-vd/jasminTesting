// describe - набор тестов
describe('Calculator.js', () => {
  //it - Описание одного теста
  it('should add number to the total', () => {
    // expect - ожидание
    // expect 5+5 to be 10
    // expect(5+5).toBe(10)

    const calculator = new Calculator()
    calculator.add(5)
    
    expect(calculator.total).toBe(5)
  })

  it('should subtract number from total', () => {
    // TODO: expectations
  })

  it('should multiply number with the total', () => {
    // TODO: expectations
  })

  it('should divide number by the total', () => {
    // TODO: expectations
  })
})