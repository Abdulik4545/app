const person = {
    name: 'Dart Veider',
    expence: 0,
    income: 0
}

const abdulik = {
    name: 'Abdulik dulik',
    expence: 300,
    income: 1000
}

const income = function (person, income) {
    person.income = person.income + income
}

const expence = function (person, expence) {
    person.expence = person.expence + expence
}

const reset = function (person) {
    person.expence = 0
    person.income = 0
}

const summury = function (person) {
    console.log(`${person.name} has $${person.income - person.expence} . $${person.income} is income $${person.expence} is expence`)
}

income(abdulik,700)
expence(person,100)
expence(abdulik,800)
 
summury(abdulik)