import {test, expect, chromium} from '@playwright/test';
import exp from 'constants';

test('handle windows/pages', async() =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = context.pages();
    console.log('No of pages', allPages.length);
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    await page2.goto('https://www.orangehrm.com/');
    await expect(page2).toHaveTitle('Human Resources Management Software | OrangeHRM');
});

test.skip('handle multiple windows/pages', async() =>{
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page.getByRole('link', {name: 'OrangeHRM, Inc'}).click();

    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('Human Resources Management Software | OrangeHRM');

    await browser.close();
});