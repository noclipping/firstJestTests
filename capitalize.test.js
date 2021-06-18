const capitalize = require('./capitalize')

test('orangutan to be Orangutan', ()=>{
    expect(capitalize('orangutan')).toBe('Orangutan')
} )
test('works with sentences', ()=>{
    expect(capitalize('the quick brown/@$fox !!')).toBe('The quick brown/@$fox !!')
} )