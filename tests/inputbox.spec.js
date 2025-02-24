import {test, expect} from '@playwright/test';

test('check input box', async({page}) => {
    await page.goto('https://www.globalsqa.com/samplepagetest/');

    const txtNameElement = page.locator('#g2599-name');
    await expect(txtNameElement).toBeVisible();
    await expect(txtNameElement).toBeEmpty();
    await expect(txtNameElement).toBeEnabled();
    await expect(txtNameElement).toBeEditable();

    await txtNameElement.fill("John");
});