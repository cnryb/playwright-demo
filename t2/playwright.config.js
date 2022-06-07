// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    headless: false,
    baseURL: 'https://front-end.zhaopin.com',
  },
  workers: 1,
  // projects: [
  //   {
  //     name: 'chrome',
  //     use: {
  //       baseURL: 'https://front-end.zhaopin.com',
  //       browserName: 'chromium',
  //       channel: 'chrome',
  //       headless: false,
  //     }
  //   },
  //   {
  //     name: 'firefox',
  //     use: {
  //       baseURL: 'https://front-end.zhaopin.com',
  //       browserName: 'firefox',
  //       headless: false,
  //     }
  //   }
  // ]
};
module.exports = config;