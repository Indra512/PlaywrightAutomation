import {test, expect} from '@playwright/test';

test('hidden drop down', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.getByAltText('company-branding')).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { type: 'submit' }).click();
    const username = await page.locator('.oxd-userdropdown-name').textContent();
    await expect(page.getByText(username)).toBeVisible();
    await page.locator("//*[text()='PIM']/ancestor::li").click();
    await page.locator('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.oxd-table-filter > div.oxd-table-filter-area > form > div.oxd-form-row > div > div:nth-child(6) > div > div:nth-child(2) > div > div > div.oxd-select-text--after').click();
    await page.waitForTimeout(2000);
    const jobTitles = await page.$$("//*[@role='listbox']//span");
    for (let title of jobTitles) {
        const t = await title.textContent();
        console.log(t);
    }
});