const { test, expect } = require('@playwright/test');
const Sales = require('../pages/newpage')
let sales

test.describe('Example test describe 01', async () => {
  test.beforeEach(async ({page}) => {
    sales = new Sales(page);
    await sales.goto('/');
  })

  test('Example test 01.01', async ({ page }) => {
    await sales.login();
  });
  test('Example test 01.02', async ({ page }) => {
    await sales.login();
  });
})