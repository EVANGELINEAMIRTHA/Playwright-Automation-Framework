const { test, expect } = require('@playwright/test');

const API_KEY = 'free_user_3EdTeja9KjjjeWMC2Gtely2mtHn';

let userId;

test('Reqres API Assignment', async ({ request }) => {

    // Create User
    const createResponse = await request.post(
        'https://reqres.in/api/users',
        {
            headers: {
                'x-api-key': API_KEY
            },
            data: {
                name: 'Evangeline',
                job: 'QA Engineer'
            }
        }
    );

    expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();

    console.log('Create Status:', createResponse.status());
    console.log('Create Response:', createBody);

    userId = createBody.id;

    // Get User Details
    const getResponse = await request.get(
        `https://reqres.in/api/users/${userId}`,
        {
            headers: {
                'x-api-key': API_KEY
            }
        }
    );

    console.log('Get Status:', getResponse.status());

    // Update User
    const updateResponse = await request.put(
        `https://reqres.in/api/users/${userId}`,
        {
            headers: {
                'x-api-key': API_KEY
            },
            data: {
                name: 'Evangeline Updated',
                job: 'Senior QA Engineer'
            }
        }
    );

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    console.log('Update Status:', updateResponse.status());
    console.log('Update Response:', updateBody);

    expect(updateBody.name).toBe('Evangeline Updated');
    expect(updateBody.job).toBe('Senior QA Engineer');
});