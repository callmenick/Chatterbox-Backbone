// js/src/models/message.js

var app = app || {};

// MESSAGE MODEL
// 
// Models the data for messages
// -----------------------------------------------------------------------------

app.Message = Backbone.Model.extend({
  
  defaults: {
    'username':'username',
    'text': 'text',
    'roomname': 'roomname'
  }
  
});