import {test, expect} from '@playwright/test';

test('keyboard actions', async ({page})=>{
    await page.goto('https://gotranscript.com/text-compare');

    await page.getByPlaceholder('Paste one version of the text here.').click();
    await page.keyboard.type('Welcome to playwright automation', {delay: 100});
    
    // Ctrl + A
    await page.keyboard.press('Control+a');

    // Ctrl + C
    await page.keyboard.press('Control+c');

    // Tab
    // await page.keyboard.press('Tab');
    await page.keyboard.down('Tab');
    await page.keyboard.up('Tab');

    // Ctrl + V
    await page.keyboard.press('Control+v');
});