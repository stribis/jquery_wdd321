
$('.cancel').click( function (e) {
  e.preventDefault()
  $('.modal-background').hide()
})

$('.trigger').click( function (e) {
  e.preventDefault()
  $('.modal-background').show()
})

// $(window).click(function (e) {
//   // console.log($(e.target))
//   if ( !$(e.target).hasClass('modal')){
//     $('.modal-background').hide()
//   }
// })