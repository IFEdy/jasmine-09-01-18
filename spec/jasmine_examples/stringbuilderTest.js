describe("stringbuilder", function(){
    var stringbuilder = require("../../lib/stringbuilder");

    describe("stringbuilder", () => {
//        it('must be a function', () => {
//            expect(stringbuilder).toBe('function')
//        })

        it('must have all necesary properties', () => {
            expect(stringbuilder).toHaveProperty('put');
            expect(stringbuilder).toHaveProperty('insert');
            expect(stringbuilder).toHaveProperty('isEmpty');
            expect(stringbuilder).toHaveProperty('empty');
            expect(stringbuilder).toHaveProperty('build');
        })

        it('Each property must have a method', () => {
            expect(stringbuilder.put).toBeOfType('function');
            expect(stringbuilder.insert).toBeOfType('function');
            expect(stringbuilder.isEmpty).toBeOfType('function');
            expect(stringbuilder.empty).toBeOfType('function');
            expect(stringbuilder.build).toBeOfType('function');
        })
    })


    describe("adding", () => {
        it("should return 'You like food'", () => {
            expect(stringbuilder.put('You like', ' food')).toBe('You like food');
        })

        it("should throw error", () => {
            expect(stringbuilder.put('You like', 1)).toHaveThrown('You like', 1);
            expect(stringbuilder.put(1, 'You like')).toHaveThrown(1, 'You like');
            expect(stringbuilder.put(2, 1)).toHaveThrown(2, 1);
        })
    })

        describe("inserting", () => {
        it("should return 'You likeed'", () => {
            expect(stringbuilder.insert('You like', 'ed')).toBe('You likeed');
        })

        it("should throw error", () => {
            expect(stringbuilder.insert('You like', 1)).toHaveThrown('You like', 1);
            expect(stringbuilder.insert(1, 'You like')).toHaveThrown(1, 'You like');
            expect(stringbuilder.insert(2, 1)).toHaveThrown(2, 1);
        })
    })
        describe("isEmpty", () => {
        it("should check if a string is ' ' ", () => {
            expect(stringbuilder.isEmpty(' ')).toHaveThrown('Is empty');
        })

        describe("emptying", () => {
        it("should delete a string 'You like' to ' '", () => {
            expect(stringbuilder.empty('You like')).toBe(' ');
        })

    })
})})
