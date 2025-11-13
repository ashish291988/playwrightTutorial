import { test, expect } from '@playwright/test';

test.describe('Scenario 3 — Partial removal before checkout', () => {
  test('Removes one item before checkout and verifies order', async ({ page }) => {
    // Navigate to the Sauce Demo login page
    await page.goto('https://www.saucedemo.com');

    // Enter standard username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button
    await page.locator('[data-test="login-button"]').click();

  // Add Sauce Labs Backpack to cart
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Add Sauce Labs Bike Light to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // Click the cart icon
  await page.locator('[data-test="shopping-cart-link"]').click();

    // Remove Sauce Labs Backpack from cart
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    // Verify cart badge shows 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    // Click checkout button
    await page.locator('[data-test="checkout"]').click();

    // Enter first name
    await page.locator('[data-test="firstName"]').fill('Test');

    // Enter last name
    await page.locator('[data-test="lastName"]').fill('Buyer');

    // Enter postal code
    await page.locator('[data-test="postalCode"]').fill('12345');

    // Click continue button
    await page.locator('[data-test="continue"]').click();

    // Verify only Sauce Labs Bike Light is present in overview
    await expect(page.locator('.inventory_item_name')).toHaveText(['Sauce Labs Bike Light']);

    // Click finish button
    await page.locator('[data-test="finish"]').click();

    // Verify order confirmation message is shown
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });
});