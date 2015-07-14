// js/src/views/app.js

var app = app || {};

// APP VIEW
// 
// This is the master app view, which acts as the top level of the entire
// application.
// -----------------------------------------------------------------------------

app.AppView = Backbone.View.extend({

  // Get the app-view element
  el: '#app-view',

  // Initialize view by fetching collection and rendering on sort
  initialize: function() {
    // Set up messages view and run fetch
    this.messagesView = this.$el.find('#messages-view');
    this.listenTo(app.Messages, 'sort', this.render);
    app.Messages.fetch();

    // Cache form variables and listen for submission
    this.messageForm = this.$el.find('#message-form');
    this.messageForm.on('submit', function(e) {
      e.preventDefault();
      this.handleMessageSubmit();
    }.bind(this));
  },

  // Render view
  render: function() {
    // Create a new rooms view, which will handle all instances of rooms showing up
    // in the app.
    var roomsView = new app.RoomsView();

    // Loop over app.Messages collection
    app.Messages.forEach(function(model) {
      // Create a new message view for every one
      var message = new app.MessageView({
        model: model
      });

      // Populate allRooms
      if (!roomsView.allRooms.hasOwnProperty(model.get('roomname'))) {
        roomsView.allRooms[model.get('roomname')] = model.get('roomname');
      }

      // Get the rendered Message view html and append it to the app view's 
      // element defined above.
      this.messagesView.append(message.render().$el);
    }.bind(this));

    // Render all rooms in various places now
    roomsView.renderSelect();
    roomsView.renderDropdown();

    // Return this
    return this;
  },

  // Handle message form submission
  handleMessageSubmit: function() {
    var messageValue = $('#message-form__text').val();
    var messageRoom = $();

    console.log(messageValue);
    // $('#message-form__text').val();
  }

});