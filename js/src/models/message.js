// js/src/models/message.js

var app = app || {};

// Message Model
// -------------

app.Message = Backbone.Model.extend({

  initialize: function(message, destination){
    this.set('message', message);
    this.set('destination', destination);
  }

});