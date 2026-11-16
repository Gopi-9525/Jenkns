# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:11:5

# Error details

```
TypeError: page.locatoer is not a function
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
      - generic [ref=e15]: "Checkout: Your Information"
    - main [ref=e17]:
      - form "Checkout information" [ref=e19]:
        - generic [ref=e20]:
          - textbox "First Name" [ref=e22]
          - textbox "Last Name" [ref=e24]
          - textbox "Zip/Postal Code" [ref=e26]
        - generic [ref=e28]:
          - button "Cancel" [ref=e29] [cursor=pointer]
          - button "Continue" [ref=e30] [cursor=pointer]
  - contentinfo [ref=e31]:
    - list [ref=e32]:
      - listitem [ref=e33]:
        - link "X" [ref=e34] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e35]:
        - link "Facebook" [ref=e36] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e37]:
        - link "LinkedIn" [ref=e38] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e39]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import{expect}from"@playwright/test"
  2  | class Checkout{
  3  |     constructor(page){
  4  |         this.page=page
  5  |         this.fname=page.locator('//input[@id="first-name"]')
  6  |         this.lname=page.locator('//input[@id="last-name"]')
  7  |         this.pcode=page.locator('//input[@placeholder="Zip/Postal Code"]')
  8  |         this.continue=page.locator('//input[@id="continue"]')
  9  |         this.paymentInformation = page.locator('//div[text()="Payment Information:"]');
> 10 |         this.shippingInformation = page.locatoer('//div[text()="Free Pony Express Delivery!"]');
     |                                         ^ TypeError: page.locatoer is not a function
  11 |         this.totalPrice =page.locator ('//div[text()="25.90"]');
  12 |     }
  13 |     async chekingout(fsname,lsname,pscode){
  14 |         await this.fname.fill(fsname)
  15 |         await this.lname.fill(lsname)
  16 |         await this.pcode.fill(pscode)
  17 |        await this.continue.click()
  18 | await expect(this.page).toHaveTitle("Swag Labs")
  19 | await expect((this.paymentInformation)).toHaveText("Payment Information:");
  20 | await expect((this.shippingInformation)).toBeVisible();
  21 | await expect((this.totalPrice)).toBeVisible();
  22 |     }
  23 |     
  24 | }
  25 | export default Checkout
```