const { defineConfig } = require('cypress');
const { codeCoverageTask } = require('@cypress/code-coverage/task'); // Add this import

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:44343/', // Adjust base URL if needed
    supportFile: 'cypress/support/index.js', // Make sure this file exists
    setupNodeEvents(on, config) {
      // Register the code coverage task
      codeCoverageTask(on, config);

      return config; // Return config to ensure proper setup
    },
  },
});
