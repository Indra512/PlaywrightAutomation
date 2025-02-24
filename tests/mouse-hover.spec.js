import { test, expect } from '@playwright/test';

test ('mouse hover', async ({page}) => {
    await page.goto('https://demo.opencart.com/');

    const desktops = page.locator("//a[text()='Desktops']");
    const mac = page.locator("//a[text()='Mac (1)']");

    await desktops.hover();
    await mac.hover();
});