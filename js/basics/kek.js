

const array = [{
    title: 'cproperty 1',
    body: true
},{
    title: 'dproperty 2',
    body: false
},{
    title: 'property 3',
    body: false
},{
    title: 'bproperty 4',
    body: false
},{
    title: 'aproperty 3',
    body: true
}] 


const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.body < b.body) {
            return -1
        } else if (b.body < a.body) {
            return 1
        } else {
            return 0
        }
    })
}

const func = sortNotes(array)
console.log(array)








// const sortNotes = function (notes) {
//     notes.sort(function (a, b) {
//         if (a.title.toLowerCase() < b.title.toLowerCase()) {
//             return -1
//         } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//             return 1
//         } else {
//             return 0
//         }
//     })
// }

// const func = sortNotes(array)
// console.log(array)



// const func = function (array, textValue) {
//     return array.filter(function (note) {
//         const title = note.title.toLowerCase().includes(textValue.toLowerCase())
//         const body = note.body.toLowerCase().includes(textValue.toLowerCase())
//         return title || body
//     })
// }

// const filter = func(array, 'false')
// console.log(filter)



// const func = function (array) {
//     return array.filter(function (note) {
//         return !note.body
//     })
// }
// console.log(func(array))



// delete function
// const func = function (array,textValue) {
//     let kek = array.findIndex(function (note,) {
//         return note.title.toLowerCase() === textValue.toLowerCase()
//     })
//     if (kek > -1) {
//         array.splice(kek, 1)
//     }
// }
// const note = func(array,'propE rty 1')
// console.log(array)
 