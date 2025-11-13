# Copilot Instructions for PlaywrightTutorial

## Project Overview
This is a Playwright E2E/UI automation project for the Sauce Demo app (`https://www.saucedemo.com/`). The codebase is designed for robust scenario-based testing, including happy path, negative, edge case, and resilience checks. All tests are written in TypeScript using the Playwright test runner.

## Architecture & Key Files
- **Tests:** All test specs are in `tests/` (main) and `e2e/` (legacy/examples). Each scenario is a separate file.
- **Test Plan:** See `specs/items-Orederable-plan.md` for scenario definitions, selectors, and conventions. Follow this for scenario coverage and selector usage.
- **Config:** `playwright.config.ts` configures browsers, parallelism, reporting, and global test options. Headed mode is enabled by default (`headless: false`).
- **CI:** `.github/workflows/playwright.yml` runs tests on push/PR, uploads HTML reports from `playwright-report/`.

## Developer Workflows
- **Run all tests:** `npm test` or `npx playwright test`
- **Run a single test:** `npx playwright test tests/<filename>.spec.ts`
- **View reports:** Open `playwright-report/index.html` after a run
- **Debug in headed mode:** Already enabled in config
- **Add new scenario:** Create a new `.spec.ts` in `tests/`, use selectors and flows from the test plan

## Project-Specific Patterns
- **Selectors:** Use `[data-test=...]` attributes for reliability. For all add-to-cart buttons, use `[data-test^="add-to-cart-"]` and iterate.
- **Test Data:** Always use `standard_user` / `secret_sauce` for login. Checkout details: First name `Test`, Last name `Buyer`, Postal code `12345`.
- **State Management:** Each test assumes a fresh browser state (no cookies/localStorage). Do not rely on previous test state.
- **Assertions:** Assert cart badge, item counts, and order confirmation text as described in the test plan. Use `.shopping_cart_badge`, `.inventory_item_name`, `.inventory_item_price`, and `.complete-header` selectors.
- **Parallelism:** Tests run in parallel by file. Avoid cross-file dependencies.

## Integration Points
- **External:** No backend integration; all flows are simulated via UI.
- **Artifacts:** Playwright HTML reports and traces are generated for each run.

## Examples
- Add all items:
  ```ts
  const addButtons = await page.locator('[data-test^="add-to-cart-"]');
  const count = await addButtons.count();
  for (let i = 0; i < count; i++) {
    await addButtons.nth(i).click();
  }
  await expect(page.locator('.shopping_cart_badge')).toHaveText(String(count));
  ```
- Sum prices:
  ```ts
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const sum = prices.map(p => parseFloat(p.replace('$', '').trim())).reduce((a, b) => a + b, 0);
  ```

## Conventions
- Scenario files should be named `scenario-<number>-<description>.spec.ts`.
- Use Playwright's built-in assertions and avoid custom wait logic.
- Always follow the scenario steps and selectors from the test plan.

---
If any section is unclear or missing, please provide feedback for improvement.
