describe('main.js', () => {
  describe('calculate()', () => {
    it('validate expression if the first number is invalid', () => {
      // stub - заглушка. Метод updateResult на самом деле не будет вызван, но дальше передастся как будто он вызывался
      // and.stub() - поведение по умолчанию для spyOn
      spyOn(window, 'updateResult')

      calculate('a+3')

      expect(window.updateResult).toHaveBeenCalled()
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
      expect(window.updateResult).toHaveBeenCalledTimes(1)
    })

    it('validate expression if the second number is invalid', () => {
      spyOn(window, 'updateResult')

      calculate('3+d')

      expect(window.updateResult).toHaveBeenCalled()
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
      expect(window.updateResult).toHaveBeenCalledTimes(1)
    })

    it('validate expression if the operation is invalid', () => {
      spyOn(window, 'updateResult')

      calculate('3_3')

      expect(window.updateResult).toHaveBeenCalled()
      expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
      expect(window.updateResult).toHaveBeenCalledTimes(1)
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

