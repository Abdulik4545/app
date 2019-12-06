
let min = 1
let max = 1


const guess = function (number) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min )
    return number === randomNum
}
console.log(guess(1))