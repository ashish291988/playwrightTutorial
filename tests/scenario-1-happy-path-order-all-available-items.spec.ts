import { test, expect } from '@playwright/test';

test.describe('Scenario 1 — Happy path: Order all available items (E2E)', () => {
  test('Order all available items', async ({ page }) => {
    // Navigate to the Sauce Demo login page
    await page.goto('https://www.saucedemo.com');

    // Enter standard username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button and wait for inventory page to load (allow extra time for slower browsers)
    await Promise.all([
      page.locator('[data-test="login-button"]').click(),
      page.waitForURL('**/inventory.html', { timeout: 60000 }),
    ]);

    // Add Sauce Labs Backpack to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpac"]').click();

    // Add Sauce Labs Bike Light to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Click the cart icon
    await page.locator('[data-test="shopping-cart-link"]').click();

    // Click checkout button  
    await page.locator('[data-test="checkout"]').click();

    // Enter first name
    await page.locator('[data-test="firstName"]').fill('John');

    // Enter last name
    await page.locator('[data-test="lastName"]').fill('Doe');

    // Enter postal code
    await page.locator('[data-test="postalCode"]').fill('12345');

    // Click continue button
    await page.locator('[data-test="continue"]').click();

    // Click finish button and wait for the order-complete page (handle slower browsers)
    await Promise.all([
      page.locator('[data-test="finish"]').click(),
      page.waitForURL('**/checkout-complete.html', { timeout: 60000 }),
    ]);

    // Verify order confirmation message is shown
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });
});