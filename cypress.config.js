const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // Force video recording
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 2000,
  },
});
