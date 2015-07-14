// js/src/views/app.js

var app = app || {};

// ROOMS VIEW
// 
// This is the rooms view, which handles all things to do with various rooms
// and their display around the app.
// -----------------------------------------------------------------------------

app.RoomsView = Backbone.View.extend({

  // Fetch the app view
  el: '#app-view',

  // Initialize
  initialize: function() {
    // Get rooms select dropdown
    this.roomsSelect = this.$el.find('#message-form__rooms');

    // Get navbar rooms dropdown
    this.roomsDropdown = this.$el.find('#navbar__rooms');
  },

  // Get template for select in form
  templateSelect: _.template($('#rooms-select-template').html()),

  // Get template for dropdown in nav bar
  templateDropdown: _.template($('#rooms-dropdown-template').html()),

  // Render the select form element
  renderSelect: function() {
    _.each(this.allRooms, function(item) {
      this.roomsSelect.append(this.templateSelect({roomname: item}));
    }.bind(this));
  },

  // Render the navbar dropdown element
  renderDropdown: function() {
    _.each(this.allRooms, function(item) {
      this.roomsDropdown.append(this.templateDropdown({roomname: item}));
    }.bind(this));
  },

  // Storage for all rooms
  allRooms: {}

});