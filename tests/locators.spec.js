import { test, expect } from '@playwright/test';

test('Locator', async ({ page }) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page.locator('#logInModalLabel')).toBeVisible();
    await page.locator("//*[@id='loginusername']").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    const products = await page.$$("//*[@class='card-title']/a");
    for (let product of products) {
        console.log(await product.textContent());
    }
});