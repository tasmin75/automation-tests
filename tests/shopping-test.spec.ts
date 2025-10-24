import { test, expect } from "@playwright/test";

test("Simple shopping test", async ({ page }) => {
  console.log("Starting my first automation test...");
  
  // Step 1: Go to website
  console.log("Step 1: Going to website...");
  await page.goto("https://automationexercise.com");
  
  // Check if home page loaded 
  const pageTitle = await page.title();
  console.log("Website title: " + pageTitle);
  
  // Step 2: Add product to cart
  console.log("Step 2: Adding product to cart...");
  
  // Find first product and add to cart
  await page.locator(".product-image-wrapper").first().hover();
  await page.locator("a[data-product-id]").first().click();
  
  // Click View Cart
  await page.click("text=View Cart");
  
  // Check if cart has products
  await expect(page.locator("#cart_info_table")).toBeVisible();
  console.log("Product added to cart!");
  
  // Step 3: Checkout
  console.log("Step 3: Going to checkout...");
  await page.click("text=Proceed To Checkout");
  
  // Step 4: Handle login
  console.log("Step 4: Logging in...");
  
  // Click register/login in popup
  await page.click("#checkoutModal u");
  
  // Login with provided credentials
  await page.fill('input[data-qa="login-email"]', "playwrighttest@example.com");
  await page.fill('input[data-qa="login-password"]', "GFXbtcVV@57kPSH");
  await page.click('button[data-qa="login-button"]');
  
  // Wait a bit for login
  await page.waitForTimeout(2000);
  
  // Step 5: Place order and check payment
  console.log("Step 5: Placing order...");
  
  // Go back to cart and checkout again
  await page.goto("https://automationexercise.com/view_cart");
  await page.click("text=Proceed To Checkout");
  await page.click("text=Place Order");
  
  // Check if payment page loaded
  await expect(page.locator('input[name="name_on_card"]')).toBeVisible();
  console.log("Reached payment page!");
  
  // Take screenshot
  await page.screenshot({ path: "payment-page.png" });
  console.log("Screenshot saved!");
  
  console.log("Test completed successfully!");
}); 