import {test, expect} from '@playwright/test';

test('upload single file', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    // upload file
    await page.locator('#singleFileInput').setInputFiles('upload-files/testfile1.pdf');
    await page.getByText('Upload Single File').click();

    await expect(page.locator('#singleFileStatus')).toHaveText('Single file selected: testfile1.pdf, Size: 19 bytes, Type: application/pdf');
});

test('upload multiple files', async ({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    // upload files
    await page.locator('#filesToUpload').setInputFiles(['upload-files/testfile1.pdf', 'upload-files/testfile2.pdf']);

    await expect(page.locator('#fileList li:nth-child(1)')).toHaveText('testfile1.pdf');
    await expect(page.locator('#fileList li:nth-child(2)')).toHaveText('testfile2.pdf');
    await page.waitForTimeout(2000);
    

    // removing files
    await page.locator('#filesToUpload').setInputFiles([]);
    await expect(page.locator('#fileList li')).toHaveText('No Files Selected');
});