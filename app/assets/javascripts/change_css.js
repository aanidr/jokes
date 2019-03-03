$(document).ready(function() {
  $('#js-joke-css-red-btn').click( function(event){
    $('#js-joke-css-div').css({
      'color':'red',
      'font-size':'12px'
    });
  });
  $('#js-joke-css-green-btn').click( function(event){
    $('#js-joke-css-div').css({
      'color':'green',
      'font-size':'14px'
    });
  });
  $('#js-joke-css-blue-btn').click( function(event){
    $('#js-joke-css-div').css({
      'color':'blue',
      'font-size':'16px'
    });
  })
})
