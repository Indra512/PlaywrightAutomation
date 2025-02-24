import {test, expect} from '@playwright/test';

test('auto suggest drop down', async({page})=>{
    await page.goto('https://www.redbus.in/');
    await page.locator('#src').fill('delhi');
    await page.waitForSelector('//ul/li/div/text[1]');
    const options = await page.$$('//ul/li/div/text[1]');
    for (let option of options) {
        const value = await option.textContent();
        if (value === 'Delhi Cantt') {
            await option.click();
            break;
        }
    }
});