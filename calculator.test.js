const calculator = require('./calculator')

test('adds 1 and 2 to be 3', ()=>{
    expect(calculator.add(1,2)).toBe(3)
})
test('subtracts 3 and 2 to be 1', ()=>{
    expect(calculator.subtract(3,2)).toBe(1)
})
test('divides 4 and 2 to be 2', ()=>{
    expect(calculator.divide(4,2)).toBe(2)
})
test('multiplies 3 and 6 to be 18', ()=>{
    expect(calculator.multiply(3,6)).toBe(18)
})