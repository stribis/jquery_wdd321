

// Example function 

function activityLog ( name, activity ) {
  console.log(`${name} loves ${activity}`)
}

activityLog( 'Martin', 'Baseball') // Martin loves Baseball

function logActivity ( name = 'Nicole', activity = 'Board Games' ) {
  console.log(`${name} loves ${activity}`)
}


logActivity() //Nicole loves Board Games

logActivity('Nils', 'Marketing') // Nils loves Marketing

let defaultPerson = {
  name : {
    first: 'Harry',
    last : 'Potter'
  },
  activity: 'Magic'
}

function objectLog (person = defaultPerson) {
  console.log(`${person.name.first} ${person.name.last} loves ${person.activity}`)
}

objectLog ()

