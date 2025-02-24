import {test, expect} from '@playwright/test';

test('check checkboxes', async({page}) => {
    await page.goto('https://www.globalsqa.com/samplepagetest/');

   const cbElement = page.locator("//input[@value='Automation Testing']");
   await expect(cbElement).toBeVisible();
   await cbElement.check();
   expect(cbElement.isChecked()).toBeTruthy();
   expect(await page.locator("//input[@value='Manual Testing']").isChecked()).toBeFalsy();
});