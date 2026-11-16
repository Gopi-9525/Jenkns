# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:11:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/cart.html"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/cart.html"

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, 2 items": "2"
  - text: Your Cart
- main:
  - text: QTY Description 1
  - button "View details for Sauce Labs Onesie": Sauce Labs Onesie
  - text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
  - button "Remove"
  - text: "1"
  - button "View details for Sauce Labs Bolt T-Shirt": Sauce Labs Bolt T-Shirt
  - text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
  - button "Remove"
  - button "Continue Shopping"
  - button "Checkout"
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
  1  | import {expect}from "@playwright/test"
  2  | class Shopping{
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.cartlink=page.locator('//a[@data-test="shopping-cart-link"]')
  6  |         this.carttitle=page.locator('//span[text()="Your Cart"]')
  7  |         this.productname=page.locator('//div[text()="Sauce Labs Onesie"]')
  8  |         this.price=page.locator('//div[text()="15.99"]')
  9  |         this.button=page.locator('//button[@id="checkout"]')
  10 | }
  11 | async opencart(){
  12 |     await this.cartlink.click()
  13 | }
  14 | async verifycartpage(){
> 15 | await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
     |                         ^ Error: expect(page).toHaveURL(expected) failed
  16 | await expect(this.page.locator(this.carttitle)).toHaveText("Your Cart")
  17 | await expect(this.productname).toBeVisible()
  18 | await expect((this.price)).toBeVisible()
  19 | await this.button.click()
  20 | 
  21 | }
  22 | 
  23 | }
  24 | export default Shopping
```