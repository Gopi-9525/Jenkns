# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:2:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[text()="Your Cart"]')
Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, 2 items" [ref=e13]:
          - generic [ref=e14]: "2"
      - generic [ref=e15]: Your Cart
    - main [ref=e17]:
      - generic [ref=e18]:
        - generic [ref=e19]:
          - generic [ref=e20]: QTY
          - generic [ref=e21]: Description
          - generic [ref=e22]:
            - generic [ref=e23]: "1"
            - generic [ref=e24]:
              - button "View details for Sauce Labs Onesie" [ref=e25] [cursor=pointer]:
                - generic [ref=e26]: Sauce Labs Onesie
              - generic [ref=e27]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
              - generic [ref=e28]:
                - generic [ref=e29]: $7.99
                - button "Remove" [ref=e30] [cursor=pointer]
          - generic [ref=e31]:
            - generic [ref=e32]: "1"
            - generic [ref=e33]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e34] [cursor=pointer]:
                - generic [ref=e35]: Sauce Labs Bolt T-Shirt
              - generic [ref=e36]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
              - generic [ref=e37]:
                - generic [ref=e38]: $15.99
                - button "Remove" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - button "Continue Shopping" [ref=e41] [cursor=pointer]
          - button "Checkout" [ref=e42] [cursor=pointer]
  - contentinfo [ref=e43]:
    - list [ref=e44]:
      - listitem [ref=e45]:
        - link "X" [ref=e46] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e47]:
        - link "Facebook" [ref=e48] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e49]:
        - link "LinkedIn" [ref=e50] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e51]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import {test,expect}from "@playwright/test"
  2  | test ("MainTask",async({page})=>{
  3  |     //Step1:Login
  4  |     await page.goto("https://www.saucedemo.com/")
  5  |     await expect(page.locator('//div[text()="Swag Labs"]')).toHaveText("Swag Labs")
  6  |     await expect (page).toHaveURL("https://www.saucedemo.com/")
  7  |     await page.locator('//input[@placeholder="Username"]').fill("standard_user")
  8  |     await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")
  9  |     await page.locator('//input[@id="login-button"]').click()
  10 |     //Step2:Select products
  11 |     await expect(page.locator('//span[text()="Products"]')).toHaveText("Products")
  12 |     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  13 |     await page.locator('//select[@class="product_sort_container"]').selectOption({index:2})
  14 |    await page.locator('//button[@name="add-to-cart-sauce-labs-onesie"]').click()
  15 |    await page.locator('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  16 |    await expect (page.locator('//span[text()="2"]')).toHaveText("2")
  17 |    //Step3 :Verify Shopping Cart
  18 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  19 |    await page.locator('//a[@data-test="shopping-cart-link"]').click()
  20 |    await page.pause()
> 21 |    await expect(page.locator('//span[text()="Your Cart"]')).toHaveText()
     |                                                             ^ Error: expect(locator).toHaveText(expected) failed
  22 |    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible()
  23 |    await expect(page.locator('//div[text()="15.99"]')).toBeVisible()
  24 |    await page.pause()
  25 | })
```