import {test, expect} from '@playwright/test';

test('bootstrap drop down', async({page})=>{
    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator("//button[contains(@class,'multiselect')]").click();

    // Assertions
    // const options = page.locator('ul > li label > input');
    // await expect(options).toHaveCount(11);

    // const options = await page.$$('ul > li label > input');
    // expect(options.length).toBe(11);

    const options = await page.$$('ul > li label');

    for (let option of options) {
        const value = await option.textContent();
        if (value.includes('Angular') || value.includes('Java')) {
            await option.check();
        }
    }

    for (let option of options) {
        const value = await option.textContent();
        if (value.includes('Angular') || value.includes('Java') || value.includes('HTML') || value.includes('CSS')) {
            await option.uncheck();
        }
    }
});