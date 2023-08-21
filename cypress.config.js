const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.aesop.com.br',
    env: {
      naturaUrl: 'https://www.natura.com.br'
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
