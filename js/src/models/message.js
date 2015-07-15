// js/src/models/message.js

var app = app || {};

// MESSAGE MODEL
// 
// Models the data for messages
// -----------------------------------------------------------------------------

app.Message = Backbone.Model.extend({

  // 
  initialize: function(username, text, roomname){
    // On request, update the collection
    this.on('request', function() {
      this.updateMessages();
    });

    
    if (roomname && text && username) {
      this.set('username', username);
      this.set('text', text);
      this.set('roomname', roomname);
    }
  },

  defaults: {
    'username':'username',
    'text': 'text',
    'roomname': 'roomname'
  },

  url: 'https://api.parse.com/1/classes/chatterbox',

  updateMessages: function() {
    app.Messages.fetch();
  }
  
});