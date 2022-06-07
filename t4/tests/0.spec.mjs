import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://front-end.zhaopin.com/
  await page.goto('https://front-end.zhaopin.com/');

  // Click button:has-text("文档")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://front-end.zhaopin.com/docs/zpfe.ada/index#/quick-start/' }*/),
    page.locator('button:has-text("文档")').click()
  ]);

  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();

  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('工程配置');

  // Click span:has-text("工程配置")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://front-end.zhaopin.com/docs/zpfe.ada/index#/scaffold/configurations.html' }*/),
    page.locator('span:has-text("工程配置")').click()
  ]);

  // Click text=https://demo.zhaopin.com/api/test
  await page.locator('text=https://demo.zhaopin.com/api/test').click();


  // Click text=https://demo.zhaopin.com/test
  await page.locator('text=https://demo.zhaopin.com/test').click();
  // Click text=回答正确。工程下的所有工件的访问都会包含 host 和 root 部分。
  const result = page.locator('text=回答正确。工程下的所有工件的访问都会包含 host 和 root 部分。');
  await expect(result).toBeVisible()
});