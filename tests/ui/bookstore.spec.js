const { test, expect } = require('@playwright/test');
const fs = require('fs');

test('Book Store Assignment', async ({ page }) => {

    // Navigate to DemoQA
    await page.goto('https://demoqa.com/');

    // Open Book Store Application
    await page.getByText('Book Store Application').click();

    // Login
    await page.locator('#login').click();

    await page.locator('#userName').fill('EvangelineQA2026');
    await page.locator('#password').fill('Test@12345');

    await page.locator('#login').click();

    // Validate username
    await expect(page.locator('#userName-value'))
        .toHaveText('EvangelineQA2026');

    console.log('Login Successful');

    // Go to Book Store
    await page.getByRole('button', {
        name: 'Go To Book Store'
    }).click();

    // Search book
    await page.locator('#searchBox')
        .fill('Learning JavaScript Design Patterns');

    // Validate search result
    await expect(
        page.getByText('Learning JavaScript Design Patterns')
    ).toBeVisible();

    console.log('Book Found');

    // Book Details
    const title = 'Learning JavaScript Design Patterns';
    const author = 'Addy Osmani';
    const publisher = "O'Reilly Media";

    console.log('Title:', title);
    console.log('Author:', author);
    console.log('Publisher:', publisher);

    // Write to file
    fs.writeFileSync(
        'bookDetails.txt',
        `Title: ${title}
Author: ${author}
Publisher: ${publisher}`
    );

    console.log('Book Details Written To File');

    // Logout
    // Go back to Profile page
await page.goBack();

// Logout
await page.locator('#submit').first().click();

console.log('Logout Successful');
});