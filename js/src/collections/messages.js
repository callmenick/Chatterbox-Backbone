// js/src/collections/messages.js

var app = app || {};

// MESSAGES COLLECTION
// 
// The collection of messages pulled from parse.
// -----------------------------------------------------------------------------

var MessageCollection = Backbone.Collection.extend({
  
  model: app.Message,

  url: 'https://api.parse.com/1/classes/chatterbox',

  parse: function(data) {
    return data.results;
  }

});

// Create our global collection of Messages.
app.Messages = new MessageCollection();