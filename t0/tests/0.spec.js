const { test, expect } = require('@playwright/test');

test('文档按钮存在', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  const title = page.locator('button.el-button--primary');
  await expect(title).toHaveText('文档');
});

test('Wiki按钮存在', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  const title = page.locator('button.el-button--default');
  await expect(title).toHaveText('Wiki');
});
