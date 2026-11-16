# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:11:5

# Error details

```
Error: Expect "toHaveText": selector: expected string, got object
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
  15 | await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")
> 16 | await expect(this.page.locator(this.carttitle)).toHaveText("Your Cart")
     |                                                 ^ Error: Expect "toHaveText": selector: expected string, got object
  17 | await expect(this.productname).toBeVisible()
  18 | await expect((this.price)).toBeVisible()
  19 | await this.button.click()
  20 | 
  21 | }
  22 | 
  23 | }
  24 | export default Shopping
```