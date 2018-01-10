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

    })
})
