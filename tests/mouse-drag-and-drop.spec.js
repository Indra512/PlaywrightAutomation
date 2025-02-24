import {test, expect} from '@playwright/test';

test('mouse drag and drop', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    const source = page.locator('#draggable');
    const target = page.locator('#droppable');

    // Approach 1
    // await source.hover();
    // await page.mouse.down();
    // await target.hover();
    // await page.mouse.up();

    // Approach 2
    await source.dragTo(target);
    await expect(page.locator("[class='ui-widget-header ui-droppable ui-state-highlight']")).toBeVisible();
});