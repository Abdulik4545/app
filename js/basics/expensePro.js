const person = [{
    desc: 'knife',
    money: 123
}, {
    desc: 'watch',
    money: 22
}, {
    desc: 'banana',
    money: 120
}
]

const addExpence = function (text, amount) {
   let kek = {
       desc: text,
       money: amount
   }
    person.unshift(kek)
}

let sum = person.forEach(function (todo, index) {
    const num = person.money
    return num
})

console.log(sum)
addExpence('drink',200)
addExpence('blabla', 899)
addExpence('ekekeke', 1899)

