import {test, expect} from '@playwright/test';

test('date picker', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#datepicker').fill('02/21/2025');

    await page.locator('#datepicker').click();
    const year = "2024";
    const month = "January";
    const day = "16";

    while(true) {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        if (currentMonth === month && currentYear === year) {
            break;
        }
        await page.getByTitle('Prev').click();
    }
    await page.locator(`//*[@data-date='${day}']`).click();
});