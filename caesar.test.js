const caesar = require('./caesar')

    test('Caesar simple', ()=>{
        expect(caesar('a',1)).toBe('b')
    })

    test('Negative with caps/punctuation', ()=>{
        expect(caesar('THE!@ QuicK brown  fox!??', -33)).toBe('MAX!@ JnbvD ukhpg  yhq!??')
    })
    test('Large numbers', ()=>{
        expect(caesar('FfF RrR Lo o o!',4455)).toBe('OoO AaA Ux x x!')
    })