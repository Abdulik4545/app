

const square = function (farengeit) {
    const celsium = (farengeit - 32) * 5 / 9  
    return celsium
}

const one = square(32)
console.log(one)
const two =  square(68)
console.log(two)
