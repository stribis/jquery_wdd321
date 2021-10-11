// Select container for times

const days_container = document.querySelector('.days > p')
const hours_container = document.querySelector('.hours > p')
const minutes_container = document.querySelector('.minutes > p')
const seconds_container = document.querySelector('.seconds > p')

// Goal Date

const goal = '25 December 2021'


function countdown() {

  // Get both dates
  const currentDate = new Date()
  const goalDate = new Date(goal)

  // Total number of seconds 
  const totalSeconds = (goalDate - currentDate) / 1000

  const seconds = Math.floor(totalSeconds % 60)
  const minutes = Math.floor(totalSeconds / 60 % 60)
  const hours = Math.floor(totalSeconds / 3600 % 60)
  const days = Math.floor(totalSeconds / 3600 / 24)

  console.log(seconds, minutes, hours, days)

  days_container.innerText = fixTime(days)
  hours_container.innerText = fixTime(hours)
  minutes_container.innerText = fixTime(minutes)
  seconds_container.innerText = fixTime(seconds)

}

countdown()

setInterval(countdown, 1000)

function fixTime (time) {
  if ( time < 10 ){
    return `0${time}`
  } else {
    return time
  }
}