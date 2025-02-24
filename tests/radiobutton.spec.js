import {test, expect} from '@playwright/test';

test('check radio buttons', async({page}) => {
    await page.goto('https://www.globalsqa.com/samplepagetest/');

   const rdElement = page.locator("//input[@value='Post Graduate']");
   await expect(rdElement).toBeVisible();
   await rdElement.check();
   expect(rdElement.isChecked()).toBeTruthy();
   expect(await page.locator("//input[@value='Graduate']").isChecked()).toBeFalsy();
});