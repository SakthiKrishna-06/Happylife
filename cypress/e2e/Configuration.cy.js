const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'cypress/support/commands.js',
    baseUrl: 'https://vizzainsurance.com/policy-login',
    defaultCommandTimeout: 10000
  },
});