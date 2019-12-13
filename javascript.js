prompt("What is favorite anime?")

console.clear()
console.error("")
console.log(typeof variable)

//  string method
let output = variable.length
output = variable.concat("continue of a sentence")
output = variable.toUpperCase()
output = variable.toLocaleLowerCase()
// !indexOf
output = variable.indexOf("rich")
output = variable.substring(2, 0)
output = variable.slice(1, 10)
output = variable.split(", ")
output = variable.replace("rich", "very reach")
output = variable.includes("rich") // return true
output = variable.repeat(5)

//  numbers
output = variable % variable2
output = Math.PI
output = Math.round(2.5)
output = Math.ceil(2.1)
output = Math.floor(2.9)
output = Math.sqrt(36) // root
output = Math.abs(-3) // absolute
output = Math.pow(9, 3)
output = Math.min(9, 3, 2, 10) // get the minimum number
output = Math.max(9, 3, 2, 1)
output++ // result than increment
console.log(--output) // decrement than result
console.log((output += 10))

// comparison
console.log("Z" < "A")
console.log(2 == "2") // true
console.log(2 === "2") // false
console.log(null == undefined) // true
console.log(null === undefined) // false
