import {test, expect} from '@playwright/test';

test('mouse right click', async({page})=>{
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

    const b = page.locator("//span[text()='right click me']");

    await b.click({button: 'right'});
});