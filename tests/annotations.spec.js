import {test, expect} from '@playwright/test';

test.skip('test 1', () => {
    console.log('this is Test 1....');
});

test('test 2', () => {
    console.log('this is  Test 2....');
});

test('test 3', async ({browserName}) => {
    if(browserName === 'chromium')
        test.skip();
    console.log('this is  Test 3....');
});

test.fixme('test 4', () => {
    console.log('this is  Test 4....');
});

test.fail('test 5', () => {
    console.log('this is  Test 5....');
    expect(1).toBe(2);
});