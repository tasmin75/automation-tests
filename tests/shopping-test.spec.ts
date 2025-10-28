import { test, expect } from "@playwright/test";

test("shopping cart test", async ({ page }) => {
  test.setTimeout(60000);

  console.log("going to home page");
  await page.goto("https://automationexercise.com");

  const logo = page.getByText("AutomationExercise").first();
  await expect(logo).toBeVisible();
  console.log("home page loades");

  const frstProduct = page.locator(".product-image-wrapper").first();
  await frstProduct.hover();

  await page.waitForTimeout(500);

  const addToCartBtn = frstProduct.locator("a.add-to-cart").first();
  await addToCartBtn.click();

  await page.getByRole("link", { name: "View Cart" }).click();
  console.log("product added to cart");

  const cartTable = page.locator("#cart_info_table");
  await expect(cartTable).toBeVisible();
  console.log("product is in the cart only");

  console.log("going to checkout page");
  const checkoutBtn = page.locator('a:has-text("Proceed To Checkout")');
  await checkoutBtn.click();

  await page.waitForTimeout(1000);

  const loginModal = page.locator(".modal-dialog");
  const isLoginRequired = await loginModal.isVisible().catch(() => false);

  if (isLoginRequired) {
    console.log("login is required,logging in");

    await page.locator('.modal-dialog a[href="/login"]').click();

    await page
      .locator('input[data-qa="login-email"]')
      .fill("playwrighttest@example.com");
    await page
      .locator('input[data-qa="login-password"]')
      .fill("GFXbtcVV@57kPSH");

    await page.locator('button[data-qa="login-button"]').click();

    await page.waitForURL("https://automationexercise.com/");
    console.log("logged in");

    await page.goto("https://automationexercise.com/view_cart");

    const checkoutBtnAgain = page.locator('a:has-text("Proceed To Checkout")');
    await checkoutBtnAgain.click();
  }

  await page.waitForTimeout(2000);

  console.log("placing order");
  const placeOrderBtn = page.locator('a:has-text("Place Order")');
  await placeOrderBtn.click();

  await page.waitForTimeout(2000);

  const cardNameField = page.locator('input[name="name_on_card"]');
  await expect(cardNameField).toBeVisible();
  console.log("payment page loaded - card details required");

  await page.screenshot({ path: "payment-page.png", fullPage: true });
  console.log("screenshot saved");
});
