// js/src/app.js

var app = app || {};

// APP
// 
// Kicks things off.
// -----------------------------------------------------------------------------

$(function() {

  // Add a new app view
  new app.AppView();

  // Focus on text box when we click the link
  $('#add-message').on('click', function(e) {
    e.preventDefault();

    $('#message-form__text').focus();
  });
});