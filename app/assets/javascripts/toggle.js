$(document).on('turbolinks:load', function() {
  $('#js-joke-toggle-btn').click( function(event){
    $('#js-joke-toggle-div').toggleClass('hidden ');
    $(this).toggleClass('btn-warning btn-success');
  })
})
