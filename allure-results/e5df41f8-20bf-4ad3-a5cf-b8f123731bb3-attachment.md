# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:2:5

# Error details

```
TypeError: page.locator(...).toBeVisible is not a function
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
        - button "Cart, empty" [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox "Sort products" [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e20]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - button "View details for Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e27]
          - generic [ref=e28]:
            - generic [ref=e29]:
              - button "View details for Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
                - generic [ref=e31]: Sauce Labs Backpack
              - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e33]:
              - generic [ref=e34]: $29.99
              - button "Add to cart" [ref=e35] [cursor=pointer]
        - generic [ref=e36]:
          - button "View details for Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Bike Light
              - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e45]:
              - generic [ref=e46]: $9.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bolt T-Shirt
              - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e57]:
              - generic [ref=e58]: $15.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Fleece Jacket
              - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e69]:
              - generic [ref=e70]: $49.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Onesie
              - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e81]:
              - generic [ref=e82]: $7.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e93]:
              - generic [ref=e94]: $15.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "X" [ref=e99] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
  20 |    await expect(page.locator('//span[text()="Your Cart"]')).toHaveText("Your Cart")
  21 |    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible()
  22 |    await expect(page.locator('//div[text()="15.99"]')).toBeVisible()
  23 |    await page.locator('//button[@id="checkout"]').click()
  24 |    //Step4:Enter Checkout
  25 |    await page.locator('//input[@id="first-name"]').fill("Gopinath")
  26 |    await page.locator('//input[@id="last-name"]').fill("N")
  27 |    await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("624613")
  28 |    await page.locator('//input[@id="continue"]').click()
  29 |    await page.pause()
  30 |    await expect(page).toHaveTitle("Swag Labs")
  31 |  // await expect(page.locator('//span[text()="Checkout: Your Information"]')).toBeVisible()
  32 |   await expect(page.locator('//div[text()="Payment Information:"]')).toHaveText("Payment Information:")
  33 |   await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toBeVisible() 
  34 |   await expect(page.locator('//div[text()="25.90"]')).toBeVisible()
  35 |   await page.pause()
  36 |   //Step5:Confirm Order
  37 |   await page.locator('//button[@id="finish"]').click()
  38 |    await expect(page.locator('//span[text()="Checkout: Complete!"]')).toHaveText("Checkout: Complete!")
  39 |    await expect(page.locator('//img[@data-test="pony-express"]')).toBeVisible()
  40 |    await expect(page.locator('//h2[text()="Thank you for your order!"]')).toHaveText("Thank you for your order!")
  41 |    await page.locator('//button[@id="back-to-products"]').click()
  42 |    await page.pause()
> 43 |    await page.locator('//span[text()="Products"]').toBeVisible()
     |                                                    ^ TypeError: page.locator(...).toBeVisible is not a function
  44 |    await page.pause()
  45 | })
```