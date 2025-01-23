const { defineConfig } = require('cypress');
const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:44343/', // Adjust base URL if needed
    supportFile: 'cypress/support/index.js', // Make sure this file exists
    setupNodeEvents(on, config) {
      // Register the code coverage task
      codeCoverageTask(on, config);

      // Optionally, you can add more custom tasks or plugins here

      return config; // Return config to ensure proper setup
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
    },
  },
});
