import {test, expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser})=>{
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(page.locator('#logInModalLabel')).toBeVisible();
    await page.locator("//*[@id='loginusername']").fill("pavanol");
    await page.locator("#loginpassword").fill("test@123");
    await page.getByRole('button', { name: 'Log in' }).click();
});

test.afterEach(async()=>{
    await page.getByRole('link', { name: 'Log out' }).click();   
});

test('home page', async()=>{
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    const products = await page.$$("//*[@class='card-title']/a");
    for (let product of products) {
        console.log(await product.textContent());
    }
});

test('add product to cart', async()=>{
    await page.getByRole('link', {name: 'Samsung galaxy s6'}).click();
    await page.getByRole('link', {name: 'Add to cart'}).click();
});
