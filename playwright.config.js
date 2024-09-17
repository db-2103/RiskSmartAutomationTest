// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout : 30 * 1000,

  expect: {
    timeout: 5000
  },

  fullyParallel: true,
 
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    browserName : 'chromium',
    headless : false,
    trace : 'retain-on-failure',
    screenshot: 'only-on-failure'

  },


});

