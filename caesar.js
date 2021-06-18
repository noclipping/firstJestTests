
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function isUpperCase(letter){
  if(letter === letter.toUpperCase()){
    return true
  } else {
    return false
  }
}

function caesar(message,shift){
  return message.split('')
  .map(letter=>{
    if(!!letter.match(/^[@#$%^(&*.,:!?]/)){return(letter)}
    if(letter === ' '){ return(' ') }
    if(shift < 0) { shift = 26 + (shift % 26) }
    let newShift = (alphabet.indexOf(letter.toLowerCase())+shift)%26
    if(isUpperCase(letter)){return alphabet[newShift].toUpperCase()}
    return alphabet[newShift]
  })
  .join('')
}

module.exports = caesar