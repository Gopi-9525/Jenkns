# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:2:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/cart.html"
Received: "https://www.saucedemo.com/inventory.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/inventory.html"

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, 2 items": "2"
  - text: Products Price (low to high)
  - combobox "Sort products":
    - option "Name (A to Z)"
    - option "Name (Z to A)"
    - option "Price (low to high)" [selected]
    - option "Price (high to low)"
- main:
  - button "View details for Sauce Labs Onesie":
    - img "Sauce Labs Onesie"
  - button "View details for Sauce Labs Onesie": Sauce Labs Onesie
  - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
  - button "Remove"
  - button "View details for Sauce Labs Bike Light":
    - img "Sauce Labs Bike Light"
  - button "View details for Sauce Labs Bike Light": Sauce Labs Bike Light
  - text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
  - button "Add to cart"
  - button "View details for Sauce Labs Bolt T-Shirt":
    - img "Sauce Labs Bolt T-Shirt"
  - button "View details for Sauce Labs Bolt T-Shirt": Sauce Labs Bolt T-Shirt
  - text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
  - button "Remove"
  - button "View details for Test.allTheThings() T-Shirt (Red)":
    - img "Test.allTheThings() T-Shirt (Red)"
  - button "View details for Test.allTheThings() T-Shirt (Red)": Test.allTheThings() T-Shirt (Red)
  - text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
  - button "Add to cart"
  - button "View details for Sauce Labs Backpack":
    - img "Sauce Labs Backpack"
  - button "View details for Sauce Labs Backpack": Sauce Labs Backpack
  - text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
  - button "Add to cart"
  - button "View details for Sauce Labs Fleece Jacket":
    - img "Sauce Labs Fleece Jacket"
  - button "View details for Sauce Labs Fleece Jacket": Sauce Labs Fleece Jacket
  - text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
  - button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 18 |    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
     |                       ^ Error: expect(page).toHaveURL(expected) failed
  19 |    await page.locator('//a[@data-test="shopping-cart-link"]').click()
  20 |    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible()
  21 |    
  22 |    await page.pause()
  23 | })
```