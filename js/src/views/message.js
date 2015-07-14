// js/src/views/message.js

var app = app || {};

// The Message View
// ----------------

app.MessageView = Backbone.View.extend({
  tagName: 'div',
  template: _.template($('#message').html()),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});