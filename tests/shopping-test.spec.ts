import { test, expect } from "@playwright/test";

test("Simple shopping test", async ({ page }) => {
  console.log("Starting my first automation test...");

  console.log("Going to website...");
  await page.goto("https://automationexercise.com");

  const pageTitle = await page.title();
  console.log("Website title: " + pageTitle);

  console.log("Adding product to cart...");

  await page.locator(".product-image-wrapper").first().hover();
  await page.locator("a[data-product-id]").first().click();

  await page.click("text=View Cart");

  await expect(page.locator("#cart_info_table")).toBeVisible();
  console.log("Product added to cart!");

  console.log("Going to checkout...");
  await page.click("text=Proceed To Checkout");

  console.log("Logging in...");

  await page.click("#checkoutModal u");

  await page.fill('input[data-qa="login-email"]', "playwrighttest@example.com");
  await page.fill('input[data-qa="login-password"]', "GFXbtcVV@57kPSH");
  await page.click('button[data-qa="login-button"]');

  await page.waitForTimeout(2000);

  console.log("Placing order...");

  await page.goto("https://automationexercise.com/view_cart");
  await page.click("text=Proceed To Checkout");
  await page.click("text=Place Order");

  await expect(page.locator('input[name="name_on_card"]')).toBeVisible();
  console.log("Reached payment page!");

  await page.screenshot({ path: "payment-page.png" });
  console.log("Screenshot took!");

  console.log("Test completed successfully!");
});
