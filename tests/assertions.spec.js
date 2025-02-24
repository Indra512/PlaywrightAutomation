import {test, expect} from '@playwright/test';

test('assertions', async ({page}) => {
    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
    await expect(page).toHaveTitle('nopCommerce demo store. Register');
    await expect(page.getByAltText('nopCommerce demo store')).toBeVisible();
    const rdMaleElemet = page.locator('#gender-male');
    await rdMaleElemet.click();
    await expect(rdMaleElemet).toBeChecked();
    await expect(page.locator('#Newsletter')).toBeChecked();
    const txtPasswordElement = page.locator('#Password');
    await expect(txtPasswordElement).toHaveAttribute('type', 'password');
    await expect(page.locator('#register-button')).toHaveText('Register');
    await expect(page.locator('#register-button')).toContainText('Regi');
});