'use strict';

var
  selenium = require('selenium-sauce'),
  test = require('tape');

// Loads the config file and invokes the callback once for each browser
module.exports = new selenium({   // Configuration options
  quiet: false,           // Silences the console output
  webdriver: {            // Options for Selenium WebDriver (WebdriverIO)
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    desiredCapabilities: [{
      browserName: 'chrome',
      version: '27',
      platform: 'XP',
      tags: ['examples'],
      name: 'This is an example test'
    }]
  },
  sauceLabs: {            // Options for SauceLabs API wrapper (npmjs.org/package/saucelabs)
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  },
  sauceConnect: {         // Options for SauceLabs Connect (npmjs.org/package/sauce-connect-launcher)
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY
  },
  selenium: {             // Options for Selenium Standalone Server (npmjs.org/package/selenium-standalone). Only used if you need Selenium running locally.
    args: []                // options to pass to `java -jar selenium-server-standalone-X.XX.X.jar`
  }
},
function browse(browser) {

  // Initialize the browser
  browser.init(function(err) {
    if (err) { throw err; }

    // Load a url into the browser
    browser.url('http://google.com', function get() {
      test('Index page', function (assert) {

        // Tell SauceLabs that the test was successful
        browser.passed(true, function report() {
          assert.pass('tests finished.');
          assert.end();
        });

      });
    });
  });
});
