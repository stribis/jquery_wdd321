// We can use destructuring to take objects apart

let lunch = {
  bread : 'Plain',
  meat: 'Pulled Pork',
  cheese: 'Chedar',
  toppings: ['Lettuce', 'Tomato', 'Cucumber']
}

let {bread, meat} = lunch

console.log(bread) //Plain

bread = 'French'