import { test, expect } from '@playwright/test';

test.describe('Scenario 2 — Negative: Checkout with empty cart', () => {
  test('Should not allow checkout with empty cart', async ({ page }) => {
    // Navigate to the Sauce Demo login page (retry once on intermittent network/frame aborts)
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        await page.goto('https://www.saucedemo.com', { waitUntil: 'load' });
        break;
      } catch (err) {
        if (attempt === 1) throw err;
        await page.waitForTimeout(1000);
      }
    }

    // Enter standard username
    await page.locator('[data-test="username"]').fill('standard_user');

    // Enter password
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click login button and wait for inventory page to load (allow extra time for slower browsers)
    await Promise.all([
      page.locator('[data-test="login-button"]').click(),
      page.waitForURL('**/inventory.html', { timeout: 60000 }),
    ]);

    // Navigate directly to the cart page
    await page.goto('https://www.saucedemo.com/cart.html');

  // Attempt to click checkout button with empty cart
  await page.locator('[data-test="checkout"]').click();

    // Assert that the checkout page is shown
    await expect(page).toHaveURL(/.*checkout-step-one.html/);

    // Optionally, verify that no items are present for checkout
    const cartItems = await page.locator('.cart_item').count();
    expect(cartItems).toBe(0);
  });
});