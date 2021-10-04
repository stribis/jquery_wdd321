
/* Example Arrays */

let saCountries = ['Colombia', 'Venezuela', 'Bolivia']
let euCountries = ['Germany', 'Austria', 'Italy']

let allCountries = [...saCountries, ...euCountries]


let veggies = ['carrot', 'lettuce', 'broccoli']
let [end] = [...veggies].reverse()
// console.log(veggies)


let cities = ['new york', 'los angeles', 'miami']
let [first, ...rest] = cities
console.log(cities)


function directions ( ...args ) {

  let [start, ...remainder] = args
  let [finish, ...stops] = remainder.reverse()


  const journal = `
  We drove through ${args.length} towns.
  We started our journey in ${start}.
  Our destination was ${finish},
  and we stopped ${stops.length} times in between.
  `

  console.log(journal)
  console.log(args)

}

directions('Frauenfeld', 'Wallisellen', 'Zürich', 'Bern', 'Geneva')