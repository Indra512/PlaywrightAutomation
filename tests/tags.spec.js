import {test, expect} from '@playwright/test';

test('test 1', {tag: '@sanity'}, () => {
    console.log('Test 1....');
});

test('test 2', {tag: '@sanity'}, () => {
    console.log('Test 2....');
});

test('test 3 @reg', () => {
    console.log('Test 3....');
});

test('test 4 @reg', () => {
    console.log('Test 4....');
});

test('test 5 @sanity@reg', () => {
    console.log('Test 5....');
});