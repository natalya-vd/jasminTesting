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

  //ToBe Matcher (===) - для примитивных типов

  describe('Calculator', () => {
    let calculator
    let calculator2

    beforeEach(() => {
      // Используется перед каждой спецификацией (it) в группе тестов
      calculator = new Calculator()
      calculator2 = new Calculator()
    })

    afterEach(() => {
      // Используется после каждой спецификации (it) в группе тестов
      // Для очистки чего-то
    })

    it('should initialize the total', () => {  
      expect(calculator.total).toBe(0)
    })

    //ToEqual Matcher - глубокое сравнение, для объектов
    it('should initialize the calculator', () => {  
      // calculator1.total = '0' -> expect false
  
      expect(calculator).toEqual(calculator2)
    })

    // toBeTruthy & toBeFalsy Matchers - истинное и ложное значение в логическом контексте
    it('toBeTruthy & toBeFalsy', () => {  
      expect(calculator.total).toBeFalsy() // -> true
      expect(calculator).toBeTruthy() // -> true
      expect(calculator2).toBeTruthy() // -> true
      // expect(calculator2).toBeFalsy() //-> false
    })
  
    // not Matcher
    it('should have unique calculator object', () => {  
      expect(calculator).not.toBe(calculator2)
    })

    // toBeUndefined & toBeDefined matcher
    it('should have common methods', () => {  
      // expect(calculator.add).not.toBeUndefined()
      expect(calculator.add).toBeDefined()
      expect(calculator.subtract).toBeDefined()
      expect(calculator.multiply).toBeDefined()
      expect(calculator.divide).toBeDefined()
    })

    // toBeNull matcher
    it('can overwrite total value', () => {
      calculator.total = null
  
      expect(calculator.total).toBeNull()
    })
  
    //toContain matcher
    it('should have the calculator constructor', () => {
      const arr = [1, 2, 3, 4]
  
      expect(arr).toContain(3)
      expect(calculator.constructor.name).toContain('Calc')
    })

    // jasmine.objectContaining - можно проверить присутствует часть объекта в ожидаемом объекте
    // jasmine.stringContaining - можно проверить присутствует часть строки в строке
    it('should contain total as key', () => {
      calculator.total = 10
  
      expect(calculator).toEqual(jasmine.objectContaining({
        total: 10
      }))
      
      expect(typeof calculator.total).toEqual(jasmine.stringContaining('mbe'))
    })

    //Custom matcher
    it('custom matcher', () => {
      jasmine.addMatchers(CustomMatcher)
      calculator.total = 10
  
      expect(calculator).toBeCalculator()
    })

    // jasmine.any() AsymmetricEqualityTester - класс или конструктор
    it('should be any instance', () => {
      calculator.total = 10
  
      expect(calculator).toEqual(jasmine.any(Object))
      expect(calculator).toEqual(jasmine.any(Calculator))
      expect(calculator.total).toEqual(jasmine.any(Number))
      // expect(calculator.total).toEqual(jasmine.any(String)) -> false
    })

    // jasmine.anything() AsymmetricEqualityTester
    it('should return the total as value', () => {
      calculator.total = 10
  
      expect(calculator.total).toEqual(jasmine.anything())
      // expect(null).toEqual(jasmine.anything()) -> false
      // expect(undefined).toEqual(jasmine.anything()) -> false
    })

    describe('add()', () => {
      it('should add number to the total', () => {
        calculator.add(5)
    
        expect(calculator.total).toBe(5)
      })

      // toMatch matcher
      it('should return total a number', () => {
        calculator.total = 10
    
        expect(calculator.add(10)).toBe(20)
        expect(calculator.total).toMatch(/-?\d+/)
        expect(typeof calculator.total).toMatch('ber')
      })
    })

    describe('subtract()', () => {
      it('should subtract number from total', () => {
        calculator.total = 30
    
        calculator.subtract(5)
    
        expect(calculator.total).toBe(25)
      })
    })

    describe('multiply()', () => {
      it('should multiply number with the total', () => {
        calculator.total = 10
    
        calculator.multiply(2)
    
        expect(calculator.total).toBe(20)
      })

      // toBeNaN matcher
      it('doesnot handle NaN for multiply', () => {
        calculator.total = 10
    
        calculator.multiply('a')
    
        expect(calculator.total).toBeNaN()
      })
    })

    describe('divide()', () => {
      it('should divide number by the total', () => {
        calculator.total = 10
    
        calculator.divide(2)
    
        expect(calculator.total).toBe(5)
      })

      //toThrow matcher - ошибка любого типа
      it('should throw error when divide by zero', () => {
        calculator.total = 10
    
        // Любая ошибка
        expect(() => calculator.divide(0)).toThrow()
    
        // Ошибка с конкретным сообщением
        expect(() => calculator.divide(0)).toThrow(new Error('Number cannot be zero'))
      })
    
      // toThrowError matcher - ошибка определенного типа или без типа
      it('should throw error with message when divide by zero', () => {
        calculator.total = 10
    
        expect(() => calculator.divide(0)).toThrowError()
        expect(() => calculator.divide(0)).toThrowError('Number cannot be zero')
        expect(() => calculator.divide(0)).toThrowError( ArithmeticError, 'Number cannot be zero')
        // expect(() => calculator.divide(0)).toThrowError( BadRequestError, 'Number cannot be zero') -> false
      })
    })

    describe('get version', () => {
      it('should get async version', (done) => {
        calculator.version.then((version) => {
          expect(version).toBe('0.2')
          done()
        })
      })
    })
  })
})