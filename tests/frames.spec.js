import {test, expect} from '@playwright/test';

test.skip('frames', async ({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frames = page.frames();
    console.log(frames.length);

    // Aproach 1 - using name or url
    const frame1 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.locator("[name='mytext1']").fill('Hello');

    // Approach 2 - using frame locator
    await page.frameLocator("//frame[@src='frame_2.html']").locator("[name='mytext2']").fill('World!');
});

test('inner frames', async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    await frame3.locator("[name='mytext3']").fill("Hello World!")

    // nested frames
    const childFrames = frame3.childFrames();
    await childFrames[0].locator("//*[@id='i9']/div[3]/div").check();
});

