const { test, expect } = require('@playwright/test');

test('Wiki按钮存在', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  // xpath 选择器
  const button = page.locator('//*[@id="root"]/div/div[2]/a[2]');
  await expect(button).toHaveText('Wiki');
});

test('跳转正确', async ({ page }) => {
  await page.goto('https://front-end.zhaopin.com/');
  // css 选择器
  await page.locator('button.el-button--primary').click();
  // 元素选择
  const h1 = page.locator('h1')
  await expect(h1).toHaveText('# 新手入门');
});

// test.only  https://playwright.dev/docs/test-annotations
test('文档按钮高亮', async ({ page }) => {
  await page.goto('http://front-end-local.zhaopin.com:8000/index');
  // vue 选择器
  const title = page.locator('_vue=AButton[type="primary"]');
  await expect(title).toHaveText('文 档');
});