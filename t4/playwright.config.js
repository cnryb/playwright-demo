// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    // headless: false,
    trace: 'retain-on-failure'
  },
  workers: 1,

  timeout: 3000
};
module.exports = config;