const analyze = require('./analyze')

test('can detect average', ()=>{
    expect(analyze([2,4,6]).average).toBe(4)
})
test('can detect length', ()=>{
    expect(analyze([1,2,3,4,5,6,7,8,9,10]).length).toBe(10)
})
test('can detect max', ()=>{
    expect(analyze([1,2,3,4,5,6,7,8,9,50,40,90,1]).max).toBe(90)
})
test('can detect min', ()=>{
    expect(analyze([12,4,1,2,3,4,5,6,7,8,9,10]).min).toBe(1)
})
