import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    WEATHER_API_BASE_URL: "http://api.weatherapi.com/v1",
    WEATHER_API_KEY: "494fe269c84142fd9b0235755231304"
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
