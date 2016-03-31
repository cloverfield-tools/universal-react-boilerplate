var WAIT = 1000;

module.exports = {
  'Smoketest' (browser) {
    browser
      .url(`${browser.launchUrl}/test-data`)
      .waitForElementVisible('body', WAIT)
      .assert.containsText('body', 'Books')
      .end();
  }
};
