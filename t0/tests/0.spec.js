const { test, expect } = require('@playwright/test');

test('文档按钮存在', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  const button = page.locator('button.el-button--primary');
  await expect(button).toHaveText('文档');
});

test('Wiki按钮存在', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  const button = page.locator('button.el-button--default');
  await expect(button).toHaveText('Wiki');
});
