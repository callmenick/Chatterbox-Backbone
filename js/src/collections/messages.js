// js/src/collections/messages.js

var app = app || {};

// Messages Collection
// -------------------

var MessageCollection = Backbone.Collection.extend({
  model: app.Message;
});

// Create our global collection of Messages.
app.Messages = new MessageCollection();