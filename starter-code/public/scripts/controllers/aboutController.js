'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.init = function() {
    $('.tab-content').hide()
    $('#about').fadeIn(500)
  }


  module.aboutController = aboutController;
})(app);
