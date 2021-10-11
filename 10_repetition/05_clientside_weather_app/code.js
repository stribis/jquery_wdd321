
getLocation ()


const apiKey = '108c1179d5f49e7ba876cdd2b2e7f156'
const aqiApiKey = '8a602c959fee444a88e80b91eda4dcbb9959d5e8'

/**
 * @returns void
 * @param  
 * @description Generates URL on load using client's geolocation
 */

function getLocation () {
  // Does the browser support geolocation
  if( navigator.geolocation) {
    // Success
    navigator.geolocation.getCurrentPosition(function (position){
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=de&appid=${apiKey}`
      getData (url)
      getAQI(position.coords.latitude, position.coords.longitude)
    })
  } else {
    // Does not work
    console.error('Browser does not support geolocation')
  }
}

/**
 * @returns void
 * @param string url 
 * @description makes ajax request to get JSON from given url
 */

function getData (url) {
  $.getJSON(url, function (data){
    console.log(data)
    generateView( data )
  })
}


/**
 * @returns void
 * @param object
 * @description Generates HTML template to display data
 */

function generateView (data) {
  $('.app-display').html('')
  const template = `
  <div class="container">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    <h2 class="temp">${data.main.temp}°C</h2>
    <p>${data.name}, ${data.sys.country}</p>
    <p class="description">${data.weather[0].description}</p>
  </div>`
  $('.app-display').html(template)
}

$('form').submit(function(e){
  e.preventDefault()
  const city = $('#cityName').val()
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=de&appid=${apiKey}`
  getData(url)
})


function getAQI (lat, lon) {
  // console.log('lat: ', lat, ' lon: ', lon)
  $.getJSON(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiApiKey}`, function (data){
    console.log(data)
    if ( data.status != 'ok'){
      console.error('Error Connecting to the AQI API: ', data.status)
    } else {
      $('.app-container').prepend(`<div class="aqi">${data.data.aqi}</div>`)
    }
  })
}