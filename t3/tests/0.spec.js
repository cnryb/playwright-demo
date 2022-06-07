const { test, expect } = require('@playwright/test');

test('性别字典数据正确', async ({ page, request }) => {
  const response = await request.post('https://fe.zhaopin.com/data-normalization/api/general', { data: [{ "dictName": "sex" }] })
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
