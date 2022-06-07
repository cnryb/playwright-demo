const { test, expect } = require('@playwright/test');

// Request context is reused by all tests in the file.
let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: 'https://fe.zhaopin.com',
    extraHTTPHeaders: {
    },
  });
})

test.afterAll(async ({ }) => {
  await apiContext.dispose();
});

test('性别字典数据正确', async ({ page, request }) => {
  const response = await apiContext.post('/data-normalization/api/general', { data: [{ "dictName": "sex" }] })
  expect(response.ok()).toBeTruthy();
  const obj = {
    "code": 200,
    "message": "success",
    "data": [
      {
        "config": {
          "dictName": "sex"
        },
        "data": [
          {
            "value": 1,
            "label": "男",
            "extra": {}
          },
          {
            "value": 2,
            "label": "女",
            "extra": {}
          }
        ]
      }
    ]
  }
  expect(await response.json()).toMatchObject((obj));
});

test('性别字典数据正确2', async ({ page, playwright }) => {
  const request = await playwright.request.newContext({
    baseURL: 'https://fe.zhaopin.com',
  })
  const response = await request.post('/data-normalization/api/general', { data: [{ "dictName": "sex" }] })
  expect(response.ok()).toBeTruthy();
  const obj = {
    "code": 200,
    "message": "success",
    "data": [
      {
        "config": {
          "dictName": "sex"
        },
        "data": [
          {
            "value": 1,
            "label": "男",
            "extra": {}
          },
          {
            "value": 2,
            "label": "女",
            "extra": {}
          }
        ]
      }
    ]
  }
  expect(await response.json()).toMatchObject((obj));
});
