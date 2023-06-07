const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
      baseUrl: 'https://www.mytoys.de',
      execTimeout: 300000,
      defaultCommandTimeout: 60000,
      pageLoadTimeout: 60000,
      viewportWidth: 1920,
      viewportHeight: 1080,
      requestTimeout: 5000,
      responseTimeout: 60000,
      retries: {
        runMode: 2,
        openMode: 1
      },
      failOnStatusCode: false,
      "reporter": "mochawesome",
      "reporterOptions": {
        "charts": true,
        "overwrite": false,
        "html": true,
        "json": false,
        "reportDir": "cypress/report/mochawesome-report"
      }
  }
});
