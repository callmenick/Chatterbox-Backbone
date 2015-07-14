// js/src/views/message.js

var app = app || {};

// MESSAGE VIEW
// 
// Responsible for rendering single message views.
// -----------------------------------------------------------------------------

app.MessageView = Backbone.View.extend({
  
  tagName: 'div',

  className: 'message panel panel-default',
  
  template: _.template($('#message-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    
    return this;
  }
  
});