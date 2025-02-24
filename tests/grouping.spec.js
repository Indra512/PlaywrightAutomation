import {test, expect} from '@playwright/test';

test.beforeAll(()=>{
    console.log("before all tests");
});

test.afterAll(()=>{
    console.log("after all tests");
});

test.beforeEach(()=>{
    console.log("before each test");
});

test.afterEach(()=>{
    console.log("after each test");
});

test.describe('Group 1', ()=>{
    test('test 1',()=>{
        console.log("test 1....");
    });
    
    test('test 2',()=>{
        console.log("test 2....");
    });
    
    test('test 3',()=>{
        console.log("test 3....");
    });
});

test.describe('Group 2', ()=>{
    test('test 4',()=>{
        console.log("test 4....");
    });
    
    test('test 5',()=>{
        console.log("test 5....");
    });
});