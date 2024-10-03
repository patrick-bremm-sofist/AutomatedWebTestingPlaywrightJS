const { test, expect } = require('@playwright/test');
const Sales = require('../pages/newpage')
let sales

test.describe('Example test describe 02', async () => {
  test.beforeEach(async ({page}) => {
    sales = new Sales(page);
    await sales.goto('/');
  })

  test('Example test 02.01', async ({ page }) => {
    await sales.login();
  });
})