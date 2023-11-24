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

    it('calls add', () => {
      const spy = spyOn(Calculator.prototype, 'add')
      calculate('3+2')

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(2)
      expect(spy).toHaveBeenCalledWith(3)
      expect(spy).toHaveBeenCalledWith(2)
    })

    it('calls subtract', () => {
      const spy = spyOn(Calculator.prototype, 'subtract')
      const spyAdd = spyOn(Calculator.prototype, 'add').and.callThrough()

      calculate('3-2')

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(2)
      expect(spy).not.toHaveBeenCalledWith(3)
      expect(spy).toHaveBeenCalledTimes(1)

      expect(spyAdd).toHaveBeenCalledWith(3)
      expect(spyAdd).toHaveBeenCalledTimes(1)
    })

    it('calls multiply', () => {
      const spy = spyOn(Calculator.prototype, 'multiply')
      const spyAdd = spyOn(Calculator.prototype, 'add').and.callThrough()

      calculate('4*5')

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(5)
      expect(spy).not.toHaveBeenCalledWith(4)
      expect(spy).toHaveBeenCalledTimes(1)

      expect(spyAdd).toHaveBeenCalledWith(4)
      expect(spyAdd).toHaveBeenCalledTimes(1)
    })

    it('calls divide', () => {
      const spy = spyOn(Calculator.prototype, 'divide')
      const spyAdd = spyOn(Calculator.prototype, 'add').and.callThrough()

      calculate('10/2')

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(2)
      expect(spy).not.toHaveBeenCalledWith(10)
      expect(spy).toHaveBeenCalledTimes(1)

      expect(spyAdd).toHaveBeenCalledWith(10)
      expect(spyAdd).toHaveBeenCalledTimes(1)
    })

    it('calls updateResult (example for callThrough)', () => {
      const spy = spyOn(window, 'updateResult')
      // .and.callThrough() - Будет вызывать реальный метод (multiply) и следить за ним
      const spyMultiply = spyOn(Calculator.prototype, 'multiply').and.callThrough()

      calculate('3*9')

      expect(spy).toHaveBeenCalled()
      expect(spyMultiply).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(27)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls updateResult (example for callFake)', () => {
      const spy = spyOn(window, 'updateResult')
      // .and.callFake() - Будет вызывать поддельный метод (который указан в callFake) и следить за реальным методом multiply
      spyOn(Calculator.prototype, 'multiply').and.callFake(() => {
        return 'fake call'
      })

      calculate('3*9')

      expect(spy).toHaveBeenCalled()
      expect(Calculator.prototype.multiply).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('fake call')
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls updateResult (example for returnValue)', () => {
      const spy = spyOn(window, 'updateResult')
      // .and.returnValue() - Будет возвращено значение и использоваться в расчетах. Далее будет следить за реальным методом multiply (но значение будет то, которое указано в returnValue). Для каждого вызова будет значение указанное в returnValue
      spyOn(Calculator.prototype, 'multiply').and.returnValue('return value')

      calculate('3*9')

      expect(spy).toHaveBeenCalled()
      expect(Calculator.prototype.multiply).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('return value')
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('calls updateResult (example for returnValues)', () => {
      const spy = spyOn(window, 'updateResult')
      // .and.returnValues() - Будут возвращены значения и использоваться в расчетах (указываем значения для каждого вызова функции add). Далее будет следить за реальным методом add (но значения будут те, которые указаны в returnValues для каждого вызова)
      spyOn(Calculator.prototype, 'add').and.returnValues(null, 'second call')

      calculate('3+9')

      expect(spy).toHaveBeenCalled()
      expect(Calculator.prototype.add).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith('second call')
      expect(spy).toHaveBeenCalledTimes(1)
    })

    it('doesnot handle errors', () => {
      spyOn(Calculator.prototype, 'multiply').and.throwError('Some error')

      expect(() => calculate('3*3')).toThrowError('Some error')
    })
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

  xdescribe('showVersion()', () => {
    it('should call the showVersion method', () => {
      spyOn(document, 'getElementById').and.returnValue({
        innerText: null
      })

      // spyOnProperty вернет Object.getOwnPropertyDescriptor(Calculator.prototype, 'version').get
      const spy = spyOnProperty(Calculator.prototype, 'version', 'get').and.returnValue('0.8')

      showVersion()

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy()).toEqual('0.8')
      // expect(spy).toHaveBeenCalledOnceWith('0.8') - не можем использовать
    })
  })
})

