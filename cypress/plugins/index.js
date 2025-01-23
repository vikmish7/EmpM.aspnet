const { codeCoverageTask } = require('@cypress/code-coverage/task');
const fs = require('fs');
const path = require('path');
const coverage = require('istanbul-lib-coverage'); // Coverage lib to generate reports

module.exports = (on, config) => {
  // Register the coverage task
  on('task', {
    coverageReport() {
      // Generate the coverage report from the coverage-final.json file
      const coverageDir = path.join(__dirname, '..', 'coverage');
      const coverageFile = path.join(coverageDir, 'coverage-final.json');

      if (fs.existsSync(coverageFile)) {
        const coverageJson = fs.readFileSync(coverageFile);
        const coverageData = JSON.parse(coverageJson);
        const reporter = new coverage.createReporter();
        reporter.add('html'); // Output format (you can add other formats like 'lcov')
        reporter.write(coverageData); // Write the coverage report
      }

      return null; // Return null to indicate task completion
    },
  });

  // Register code coverage task
  codeCoverageTask(on, config);

  return config; // Return config to ensure proper setup
};
