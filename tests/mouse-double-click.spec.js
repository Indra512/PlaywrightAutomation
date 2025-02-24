import {test, expect} from '@playwright/test';

test('mouse double click', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const btnCopy = page.getByText('Copy Text');

    await btnCopy.dblclick();

    await expect(page.locator('#field2')).toHaveValue('Hello World!');
});