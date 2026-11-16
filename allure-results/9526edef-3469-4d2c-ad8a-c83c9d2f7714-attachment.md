# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:2:5

# Error details

```
ReferenceError: products is not defined
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
          - generic [ref=e18]: Price (low to high)
          - combobox "Sort products" [ref=e19]:
            - option "Name (A to Z)"
            - option "Name (Z to A)"
            - option "Price (low to high)" [selected]
            - option "Price (high to low)"
    - main [ref=e20]:
      - generic [ref=e23]:
        - generic [ref=e24]:
          - button "View details for Sauce Labs Onesie" [ref=e26] [cursor=pointer]:
            - img "Sauce Labs Onesie"
          - generic [ref=e27]:
            - generic [ref=e28]:
              - button "View details for Sauce Labs Onesie" [ref=e29] [cursor=pointer]:
                - generic [ref=e30]: Sauce Labs Onesie
              - generic [ref=e31]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e32]:
              - generic [ref=e33]: $7.99
              - button "Add to cart" [ref=e34] [cursor=pointer]
        - generic [ref=e35]:
          - button "View details for Sauce Labs Bike Light" [ref=e37] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e38]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - button "View details for Sauce Labs Bike Light" [ref=e41] [cursor=pointer]:
                - generic [ref=e42]: Sauce Labs Bike Light
              - generic [ref=e43]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e44]:
              - generic [ref=e45]: $9.99
              - button "Add to cart" [ref=e46] [cursor=pointer]
        - generic [ref=e47]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e49] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e53] [cursor=pointer]:
                - generic [ref=e54]: Sauce Labs Bolt T-Shirt
              - generic [ref=e55]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e56]:
              - generic [ref=e57]: $15.99
              - button "Add to cart" [ref=e58] [cursor=pointer]
        - generic [ref=e59]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e61] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)"
          - generic [ref=e62]:
            - generic [ref=e63]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e64] [cursor=pointer]:
                - generic [ref=e65]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e66]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e67]:
              - generic [ref=e68]: $15.99
              - button "Add to cart" [ref=e69] [cursor=pointer]
        - generic [ref=e70]:
          - button "View details for Sauce Labs Backpack" [ref=e72] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e73]
          - generic [ref=e74]:
            - generic [ref=e75]:
              - button "View details for Sauce Labs Backpack" [ref=e76] [cursor=pointer]:
                - generic [ref=e77]: Sauce Labs Backpack
              - generic [ref=e78]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e79]:
              - generic [ref=e80]: $29.99
              - button "Add to cart" [ref=e81] [cursor=pointer]
        - generic [ref=e82]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e84] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e85]
          - generic [ref=e86]:
            - generic [ref=e87]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]: Sauce Labs Fleece Jacket
              - generic [ref=e90]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e91]:
              - generic [ref=e92]: $49.99
              - button "Add to cart" [ref=e93] [cursor=pointer]
  - contentinfo [ref=e94]:
    - list [ref=e95]:
      - listitem [ref=e96]:
        - link "X" [ref=e97] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e98]:
        - link "Facebook" [ref=e99] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e100]:
        - link "LinkedIn" [ref=e101] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e102]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 14 |     for (const productName of products) {
     |                               ^ ReferenceError: products is not defined
  15 | 
  16 |         const productButton =
  17 |             `//div[text()="${productName}"]/ancestor::div[@class="inventory_item"]//button`;
  18 | 
  19 |         await page.locator(productButton).click();
  20 |     }
  21 |    //await page.locator('//button[@name="add-to-cart-sauce-labs-onesie"]').click()
  22 |    //await page.locator('//button[@id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  23 |    await expect (page.locator('//span[text()="2"]')).toHaveText("2")
  24 |    //Step3 :Verify Shopping Cart
  25 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  26 |    await page.locator('//a[@data-test="shopping-cart-link"]').click()
  27 |    await expect(page.locator('//span[text()="Your Cart"]')).toHaveText("Your Cart")
  28 |    await expect(page.locator('//div[text()="Sauce Labs Onesie"]')).toBeVisible()
  29 |    await expect(page.locator('//div[text()="15.99"]')).toBeVisible()
  30 |    await page.locator('//button[@id="checkout"]').click()
  31 |    //Step4:Enter Checkout
  32 |    await page.locator('//input[@id="first-name"]').fill("Gopinath")
  33 |    await page.locator('//input[@id="last-name"]').fill("N")
  34 |    await page.locator('//input[@placeholder="Zip/Postal Code"]').fill("624613")
  35 |    await page.locator('//input[@id="continue"]').click()
  36 |    await page.pause()
  37 |    await expect(page).toHaveTitle("Swag Labs")
  38 |  // await expect(page.locator('//span[text()="Checkout: Your Information"]')).toBeVisible()
  39 |   await expect(page.locator('//div[text()="Payment Information:"]')).toHaveText("Payment Information:")
  40 |   await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toBeVisible() 
  41 |   await expect(page.locator('//div[text()="25.90"]')).toBeVisible()
  42 |   await page.pause()
  43 |   //Step5:Confirm Order
  44 |   await page.locator('//button[@id="finish"]').click()
  45 |    await expect(page.locator('//span[text()="Checkout: Complete!"]')).toHaveText("Checkout: Complete!")
  46 |    await expect(page.locator('//img[@data-test="pony-express"]')).toBeVisible()
  47 |    await expect(page.locator('//h2[text()="Thank you for your order!"]')).toHaveText("Thank you for your order!")
  48 |    await page.locator('//button[@id="back-to-products"]').click()
  49 |    await page.pause()
  50 |    //await page.locator('//span[text()="Products"]').toBeVisible()
  51 |    //Step6:Logout
  52 |    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  53 |    await page.locator('//button[@id="react-burger-menu-btn"]').click()
  54 |    await page.pause()
  55 |    await page.locator('//a[@id="logout_sidebar_link"]').click()
  56 |    await page.pause()
  57 |    await expect(page).toHaveTitle("Swag Labs")
  58 |    await page.pause()
  59 | })
```