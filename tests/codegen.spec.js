import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '23' }).click();
  await page.locator('#txtDate').click();
  await page.getByLabel('Select month').selectOption('4');
  await page.getByRole('link', { name: '12' }).click();
  await page.locator('#txtDate').click();
  await page.getByLabel('Select year').selectOption('2019');
  await page.getByRole('link', { name: '9', exact: true }).click();
  await page.getByPlaceholder('Start Date').fill('1995-10-25');
  await page.getByPlaceholder('End Date').fill('2026-10-25');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});