const { defineConfig } = require("cypress");
const codeCoverageTask = require("@cypress/code-coverage/task");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost:44343/", // Adjust base URL if needed
    supportFile: "cypress/support/index.js", // Make sure this file exists
    setupNodeEvents(on, config) {
      // Register the code coverage task
      codeCoverageTask(on, config);

      // Optionally, you can add more custom tasks or plugins here

      return config; // Return config to ensure proper setup
    },

    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      reportFilename: "[name]-report", // Use suite name for unique reports
      overwrite: false, // Do not overwrite existing files
      html: true,
      json: true,
    },
  },

  component: {
    devServer: {
      bundler: "webpack",
      webpackConfig: require("./webpack.config.js"), // Custom Webpack config
    },
    supportFile: "cypress/support/component.js", // Ensure this file exists
    specPattern: "cypress/component/**/*.cy.js", // Ensure it only looks in the component folder

    setupNodeEvents(on, config) {
      // Register the code coverage task for component testing
      codeCoverageTask(on, config);

      // Register mochawesome reporter for component testing

      return config;
    },
    
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/CompReports",
      reportFilename: "[name]-report", // Use suite name for unique reports
      overwrite: false, // Do not overwrite existing files
      html: true,
      json: true,
    },
  },
});
