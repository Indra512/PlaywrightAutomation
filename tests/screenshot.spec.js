import {test, expect} from '@playwright/test';

test('page screenshot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.screenshot({path:'../screenshots/'+Date.now()+'page.png'});
});

test('full page screenshot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.screenshot({path:'../screenshots/'+Date.now()+'full-page.png', fullPage: true});
});

test('element screenshot', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator("[class='widget Wikipedia']").screenshot({path:'../screenshots/'+Date.now()+'element.png'});
});