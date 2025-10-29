import { test, expect } from "@playwright/test";

test("shopping cart test using playwright codegen", async ({ page }) => {
  test.setTimeout(60000);

  await page.goto("https://automationexercise.com/");

  await expect(
    page.getByRole("heading", { name: "AutomationExercise" }).first()
  ).toBeVisible();

  await page.locator(".product-image-wrapper").first().hover();
  await page
    .locator(".product-image-wrapper")
    .first()
    .locator(".add-to-cart")
    .first()
    .click();

  await page.getByRole("link", { name: "View Cart" }).click();

  await expect(page.locator("#cart_info_table")).toBeVisible();

  await page.getByText("Proceed To Checkout").click();

  await page.getByRole("link", { name: "Register / Login" }).click();

  await page
    .locator("form")
    .filter({ hasText: "Login" })
    .getByPlaceholder("Email Address")
    .fill("playwrighttest@example.com");

  await page.getByRole("textbox", { name: "Password" }).fill("GFXbtcVV@57kPSH");

  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForURL("**/");

  await page.goto("https://automationexercise.com/view_cart");

  await page.getByText("Proceed To Checkout").click();

  await page.getByRole("link", { name: "Place Order" }).click();

  await expect(page.locator('[name="name_on_card"]')).toBeVisible();

  await page.screenshot({ path: "payment-page.png", fullPage: true });
});
