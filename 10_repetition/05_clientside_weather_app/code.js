
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
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=en&appid=${apiKey}`
      getData (url)
      // Run the getAQI function to display the current AQI
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
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=en&appid=${apiKey}`
  getData(url)
})

/**
 * @returns void
 * @param {number, number}
 * @description Generates HTML template to display AQI data
 */
function getAQI (lat, lon) {
  // console.log('lat: ', lat, ' lon: ', lon)
  $.getJSON(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${aqiApiKey}`, function (data){
    console.log(data)
    if ( data.status != 'ok'){
      console.error('Error Connecting to the AQI API: ', data.status)
    } else {	
      // Create AQI Element for website
      if ( data.data.aqi < 51) {
        // AQI is good
        $('.app-container').prepend(`<div class="aqi aqi-good">${data.data.aqi}: GOOD</div>`)
      } else if (data.data.aqi > 50 && data.data.aqi < 101 ) {
        // AQI is moderate
        $('.app-container').prepend(`<div class="aqi aqi-moderate">${data.data.aqi}: MODERATE</div>`)
      } else if (data.data.aqi > 100 && data.data.aqi < 151 ) {
        // AQI is Moderate
        $('.app-container').prepend(`<div class="aqi aqi-ufs">${data.data.aqi}: Unhealthy for Sensitive Groups</div>`)
      } else if (data.data.aqi > 150 && data.data.aqi < 200 ) {
        // AQI is unhealthy for Sensitive Groups
        $('.app-container').prepend(`<div class="aqi aqi-unhealthy">${data.data.aqi}: Unhealthy</div>`)
      } else if (data.data.aqi > 200 && data.data.aqi < 301 ) {
        // AQI is unhealthy
        $('.app-container').prepend(`<div class="aqi aqi-vu">${data.data.aqi}: Very Unhealthy</div>`)
      } else if (data.data.aqi > 300) {
        // AQI is Hazardous
        $('.app-container').prepend(`<div class="aqi aqi-hazardous">${data.data.aqi}: Hazardous</div>`)
      }
    }
  })
}