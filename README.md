# Automation Exercise - Playwright Tests

This is my first Playwright automation project. I created this as a learning exercise to test basic e-commerce functionality.

## My Learning Journey

Since I'm new to testing, I approached this step-by-step:

- Day 1: Set up Playwright and learned basic commands
- Day 2: Wrote the test following the exact requirements
- Day 3: Debugged and made sure everything works

I'm still learning testing concepts, but this assignment helped me understand:

- How automated testing works
- The importance of verifying each step
- How to handle different user flows

## What I Learned

- Setting up Playwright with TypeScript
- Writing my first automated test
- Finding elements on a webpage
- Handling login flows
- Taking screenshots

## Setup Instructions

1. Clone this repository
 
git clone https://github.com/tasmin75/automation-tests

2. Install dependencies:

```
   npm install
```

3. Run the test:

```
   npx playwright test
```

4. To see the browser while testing:

```
   npx playwright test --headed
```

## What the Test Does

The test automates a simple shopping journey:

1. Opens the Automation Exercise website
2. Adds the first product to cart
3. Proceeds to checkout
4. Logs in with test credentials
5. Reaches the payment page and saves a screenshot

## Notes

- This is my first time working with Playwright
- I added console.log statements to help me understand the flow
- The screenshot is saved as `payment-page.png`

