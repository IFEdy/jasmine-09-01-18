describe("quadratic", () => {
        let quadratic = require("../../lib/quadratic");



    describe(   'quadratic', () =>{
        it('it should be a function', () => {
            expect(typeof(quadratic)).toBe('function')
        })

        describe('quadratic', () => {
            it('should have an argument', () => {
                expect(quadratic()).toBe('NaN and NaN')
            })
        })
        describe('quadratic', () => {
            it('should not be strings', () => {
                expect(quadratic('sdf', 'dfdsf', 'dfdsf')).toBe('NaN and NaN')
            })
        })
        describe('quadratic', () => {
            it('should have two variables', () => {
                expect(quadratic('a', 2, 6)).toBe('NaN and NaN')
            })
        })
//
//        describe('positive', () => {
//            it("should expect '(1, 2, 3)' to give '3'", () => {
//                expect('quadratic.positive (1, 2, 3)').toBe('3')
//            })
//            it('sholud throw errors', () => {
//                expect('quadractic.positive (a, 2, 6)').throwError('impossible error')
//                expect('quadractic.positive (5, b, 3)').throwError('impossible error')
//                expect('quadractic.positive (1, 4, c)').throwError('impossible error')
//                expect('quadractic.positive (a, b, c)').throwError('impossible error')
//            })
//        })
//
//        describe('ngative', () => {
//            it("should expect '(1, 2, 3)' to give '3'", () => {
//                expect('quadratic.negative (1, 2, 3)').toBe('1')
//            })
//            it('should throw errors', () => {
//                expect('quadractic.nagative (a, 2, 6)').throwError('impossible error')
//                expect('quadractic.negative (5, b, 3)').throwError('impossible error')
//                expect('quadractic.negative (1, 4, c)').throwError('impossible error')
//                expect('quadractic.negative (a, b, c)').throwError('impossible error')
//            })
//        })
    })
})
