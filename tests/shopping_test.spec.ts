import { test, expect } from "@playwright/test";

test("shopping cart test", async ({ page }) => {
  test.setTimeout(60000);

  console.log("going to home page");

  await page.goto("https://automationexercise.com", {
    waitUntil: "domcontentloaded",
  });

  await expect(
    page.getByRole("heading", { name: "AutomationExercise" }).first()
  ).toBeVisible();
  console.log("home page loades");

  const frstProduct = page.locator(".product-image-wrapper").first();
  await frstProduct.hover();

  await frstProduct.locator(".add-to-cart").first().click();

  await page.getByRole("link", { name: "View Cart" }).click();
  console.log("product added to cart");

  await expect(page.locator("#cart_info_table")).toBeVisible();
  console.log("product is in the cart only, visible in cart table");
  console.log("going to checkout page");

  await page.getByText("Proceed To Checkout").click();

  const loginModal = page.locator("#checkoutModal");
  const isModalVisible = await loginModal.isVisible().catch(() => false);

  if (isModalVisible) {
    await loginModal.getByRole("link").click();

    await page
      .locator('[data-qa="login-email"]')
      .fill("playwrighttest@example.com");
    await page.locator('[data-qa="login-password"]').fill("GFXbtcVV@57kPSH");
    await page.locator('[data-qa="login-button"]').click();

    await page.waitForURL("**/", { timeout: 10000 });

    await page.goto("https://automationexercise.com/view_cart", {
      waitUntil: "domcontentloaded",
    });

    await page.getByText("Proceed To Checkout").click();
  }
  console.log("placing order");

  await page.getByText("Place Order").click();

  await expect(page.locator('[name="name_on_card"]')).toBeVisible();
  console.log("payment page loaded - card details required");

  await page.screenshot({ path: "payment-page.png", fullPage: true });
  console.log("screenshot saved");
});
