import {test, expect} from '@playwright/test';

test('handling table', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    // total numbers of rows & columns
    const table = page.locator('#productTable');
    const columns = table.locator('thead tr th');
    expect(await columns.count()).toBe(4);

    const rows = table.locator('tbody tr');
    expect(await rows.count()).toBe(5);

    // select checkbox for smartwatch
    const row = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'
    });
    await row.locator('input').check();

    // select multiple checkboxes
    await selectProduct(page, rows, 'Smartphone');
    await selectProduct(page, rows, 'Laptop');

    // print product details using loop
    // for (let i=0;i<await rows.count();i++) {
    //     const row = rows.nth(i);
    //     const tds = row.locator('td');
    //     for(let j=0;j<await tds.count()-1;j++) {
    //         console.log(await tds.nth(j).textContent());
    //     }
    // }

    // read data from all the pages in the table
    const pages = page.locator('.pagination li a');
    console.log('Number of pages in the table', await pages.count());

    for (let p=0;p<await pages.count();p++) {
        if (p>0) {
            await pages.nth(p).click();
        }
        for (let i=0;i<await rows.count();i++) {
            const row = rows.nth(i);
            const tds = row.locator('td');
            for(let j=0;j<await tds.count()-1;j++) {
                console.log(await tds.nth(j).textContent());
            }
        }
    }
    
    await page.waitForTimeout(2000);
});

const selectProduct = async (page, rows, name) => {
    const row = rows.filter({
        has: page.locator('td'),
        hasText: name
    });
    await row.locator('input').check();
};