const codeCoverage = require('@cypress/code-coverage/plugin');

module.exports = (on, config) => {
  codeCoverage(on, config);
  return config;
};
