import {test, expect} from '@playwright/test';
import exp from 'constants';

test('handle drop downs', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption({label: 'India'}); // using label
    // await page.locator('#country').selectOption('France'); // using visible text
    // await page.locator('#country').selectOption({value: 'canada'}); // using value attribute
    // await page.locator('#country').selectOption({index: 5}); // using index

    // Assertions
    // 1. Check number of options in dropdown - Approach 1
    // const options = page.locator('#country option');
    // await expect(options).toHaveCount(10);

    // 2. Check number of options in dropdown - Approach 2
    // const options = await page.$$('#country option');
    // expect(options.length).toBe(10);

    // 3. Check presence of value in the dropdown - Approach 1
    // const options = await page.locator('#country').textContent();
    // expect(options.includes('Canada')).toBeTruthy();

    // 4. Check presence of value in the dropdown - Approach 2
    const options = await page.$$('#country option');
    for (const option of options) {
        console.log(await option.textContent());
    }
});

test('multi select dropdown', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.selectOption('#colors', ['Red', 'Green', 'White']);


    // Assertions
    // 1. Check number of options in dropdown - Approach 1
    // const options = page.locator('#colors option');
    // await expect(options).toHaveCount(7);

    // 2. Check number of options in dropdown - Approach 2
    const options = await page.$$('#colors option');
    expect(options.length).toBe(7);
});