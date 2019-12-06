

const calc = function (stutentsScore, maxScore = 20) {
    let letter 
    const percent = stutentsScore / maxScore * 100
    if (percent >= 90) {
        letter = 'A'
    } else if (percent >= 80) {
        letter = 'B'
    }
    else if (percent >= 70) {
        letter = 'C'
    }
    else if (percent >= 60) {
        letter = 'D'
    }
    else {
        letter = 'F'
    }
    return `Y got a ${letter} (${percent})% !` 
} 

 
const exam = calc(66,100)

console.log(exam)