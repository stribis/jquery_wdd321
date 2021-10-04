

class Vacation {

  constructor (destination, length) {
    this.destination = destination
    this.length = length
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days`)
  }

  sayHello () {
    console.log('Hello, I am Classy, the class')
  }
}

const firstTrip = new Vacation('Santiago, Chile',7)
const secondTrip = new Vacation('Helsinki, Finland',15)


firstTrip.print()
secondTrip.print()