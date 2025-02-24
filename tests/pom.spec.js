import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { HomePage } from '../pages/home-page';
import { CartPage } from '../pages/cart-page';

const testData = require('../login.json');

test('add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    await loginPage.goToLoginDialog();
    await loginPage.login(testData.username, testData.password);
    await page.waitForTimeout(2000);
    await homePage.addProductToCart('Iphone 6 32gb');
    await homePage.goToCart();
    await page.waitForTimeout(2000);
    expect(cartPage.checkProductInCart()).toBeTruthy();
});