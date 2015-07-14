// js/src/views/app.js

var app = app || {};

// APP VIEW
// 
// This is the master app view, which acts as the top level of the entire
// application.
// -----------------------------------------------------------------------------

app.AppView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(app.Messages, 'sort', this.render);
    app.Messages.fetch();
  },

  render: function() {
    console.log(app.Messages);
  }

});