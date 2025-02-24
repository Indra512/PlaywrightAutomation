import { test, expect, request } from '@playwright/test';
import { log } from 'console';

var userId;

test.skip('get users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);
});

test.skip('create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: { "name": "morpheus", "job": "leader" },
        headers: { "Accept": "application/json" }
    });
    expect(response.status()).toBe(201);
    const res = await response.json();
    userId = res.id;
});

test.skip('update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/' + userId, {
        data: { "name": "morpheus", "job": "engineer" },
        headers: { "Accept": "application/json" }
    });
    expect(response.status()).toBe(200);
});

test.skip('delete user', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/' + userId);
    expect(response.status()).toBe(204);
});