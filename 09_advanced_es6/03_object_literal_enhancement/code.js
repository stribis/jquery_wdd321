
// Object Literal Enhacement (Restructuring)

let name = 'Switzerland'
let capital = 'Bern'

let completeName = function () {
  console.log(`${this.capital} is the capital of ${this.name}`)
}


let country = {name, capital, completeName}


console.log(country)