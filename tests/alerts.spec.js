import {test, expect} from '@playwright/test';

test('alert with OK', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog handler
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.locator('#alertBtn').click();
    await page.waitForTimeout(3000);
});

test('confirmation alert with OK and Cancel', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog handler
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    });

    await page.locator('#confirmBtn').click();
    await expect(page.getByText('You pressed OK!')).toBeVisible();
    await page.waitForTimeout(3000);
});

test('prompt dialog with input field', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Enabling dialog handler
    page.on('dialog', async dialog=>{   
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        await dialog.accept('John Cena');
    });
    await page.locator('#promptBtn').click();
    await expect(page.getByText('Hello John Cena! How are you today?')).toBeVisible();
});