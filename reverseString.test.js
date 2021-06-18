const reverseString = require('./reverseString')

test('reverses single word', ()=>{
    expect(reverseString('cake')).toBe('ekac');
})
test('reverses sentences', ()=>{
    expect(reverseString('Big guy.')).toBe('.yug giB')
})