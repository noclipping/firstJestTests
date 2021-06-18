function analyze(arry){
    let avg = arry.reduce((a,b)=>{
        return a+b
    }, 0)/(arry.length)
    
    let sorted = arry.sort((a,b)=>{
        a>b?1:-1
    })
    return {
        average: avg,
        min: sorted[0],
        max: sorted[sorted.length-1],
        length: arry.length
    }
}
module.exports = analyze;