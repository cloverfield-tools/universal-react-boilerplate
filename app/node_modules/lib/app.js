'use strict';

/**
 * Declare dependencies here. e.g.
 * var myModule = require('some-module');
 */

/**
 * The app factory function. Options and dependencies
 * can be passed into the options object. Exposing
 * the app this way also makes it easier to test.
 * 
 * @param  {Object} options             The options object.
 * @param  {String} options.someOption  Document available options here.
 * @return {Object}                     The application object.
 */
var app = function app(options) {

  // Create the app instance.
  var instance = Object.assign({}, {
    options: options

    // Add to the app here...

  });

  // Initialize the app, handle application routing,
  // hook up page rendering, etc...

  return instance;
};

// Expose the app factory to other modules.
module.exports = app;
