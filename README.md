moxymind interview round 2

All test are written in TypeScript and Playwright framework.

Test cases validate basic feature for login page 'soucedemo.com':
- checked correct page is loaded
- checked successful login with correct user
- checked error messages for missing credentials (all combinations)
- checked error message for empty inputs
- checked error message for locked user
- viusal testing for login page

For test execution is necessary to have installed:

1. Node.js (or NPM)
2. Playwright
- via command line: npm init playwright@latest
- via VS code(recommended): - go to extentions
               - write Playwright into search file
               - select playwright for VS code
               - install
               - press CTRL+SHIFT+P (win) for CMD+SHIFT+P (mac) to open commannd palette
               - write install playwright and seleted preferred browsers (all three), github actions not required


For run test cases in headless mode use command: npx playwright test

For run test cases in headed mode use command: npx playwright test --headed

For display test report after run use command: npx playwright show-report




