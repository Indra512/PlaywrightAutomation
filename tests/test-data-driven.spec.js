import { test, expect } from '@playwright/test';
const testData = require('../test-data.json');

test.describe('data driven tests', () => {
    for (const data of testData) {
        test(`login with user ${data.username}`, async ({ page }) => {
            await page.goto('https://demoblaze.com/index.html');
            await page.getByRole('link', { name: 'Log in' }).click();
            await expect(page.locator('#logInModalLabel')).toBeVisible();
            await page.locator("//*[@id='loginusername']").fill(data.username);
            await page.locator("#loginpassword").fill(data.password);
        });
    }
});