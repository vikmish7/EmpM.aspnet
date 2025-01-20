const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://localhost:44343/', // Replace with your app's URL
    supportFile: false, // Optional, depending on your setup
  },
  setupNodeEvents(on, config) {
    require('@cypress/code-coverage/task')(on, config)
    // include any other plugin code...

    // It's IMPORTANT to return the config object
    // with any changed environment variables
    return config
  },
});
