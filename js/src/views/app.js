// js/src/views/app.js

var app = app || {};

// APP VIEW
// 
// This is the master app view, which acts as the top level of the entire
// application.
// -----------------------------------------------------------------------------

app.AppView = Backbone.View.extend({

  // Get the correct element
  el: '#messages-feed',

  // Initialize view by fetching collection and rendering on sort
  initialize: function() {
    this.listenTo(app.Messages, 'sort', this.render);

    app.Messages.fetch();
  },

  // Render view
  render: function() {
    // Loop over app.Messages collection
    app.Messages.forEach(function(model) {
      // Create a new message view for every one
      var message = new app.MessageView({
        model: model
      });

      // Get the rendered Message view html and append it to the app view's 
      // element defined above.
      this.$el.append(message.render().$el);
    }.bind(this));

    return this;
  }

});