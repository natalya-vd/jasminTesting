describe('main.js', () => {
  describe('calculate()', () => {
    it('validate expression if the number is invalid', () => {
      // stub - заглушка. Метод updateResult на самом деле не будет вызван, но дальше передастся как будто он вызывался
      spyOn(window, 'updateResult').and.stub()

      calculate('a+3')

    })
    xit('calls add')
    xit('calls subtract')
    xit('calls multiply')
    xit('calls divide')
    xit('validate operation')
    xit('calls updateResult')
  })

  describe('updateResult()', () => {
    let element
    
    beforeAll(() => {
      element = document.createElement('div')
      element.setAttribute('id', 'result')
      document.body.appendChild(element)
    })

    afterAll(() => {
      const element = document.getElementById('result')
      document.body.removeChild(element)
    })

    it('add result to the DOM element', () => {
      updateResult('5')

      expect(element.innerText).toBe('5')
    })
  })
})

