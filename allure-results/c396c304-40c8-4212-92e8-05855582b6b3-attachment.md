# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: maintask.spec.js >> MainTask
- Location: tests\maintask.spec.js:11:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('//span[text()="Products"]')
Expected: "Products"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('//span[text()="Products"]') with timeout 5000ms
  - waiting for locator('//span[text()="Products"]')

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": uname
    - textbox "Password": pword
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import {expect}from "@playwright/test"
  2  | class Swlabs{
  3  |     constructor(page){
  4  |         this.page=page;
  5  |         this.products=page.locator('//span[text()="Products"]')
  6  |         this.sortDropdown=page.locator('//select[@class="product_sort_container"]')
  7  |         this.CartCount=page.locator('//span[text()="2"]')
  8  |         
  9  |     }
  10 |     async verifyproducts(){
> 11 |     await expect (this.products).toHaveText("Products")
     |                                  ^ Error: expect(locator).toHaveText(expected) failed
  12 |     await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
  13 |     }
  14 |     async sortproducts(){
  15 |         await (this.sortDropdown).selectOption({index:2})
  16 |   
  17 |     }
  18 |     async addproducts(){
  19 |         const products = [
  20 |     "sauce-labs-onesie",
  21 |     "sauce-labs-bolt-t-shirt"
  22 | ]
  23 | for (const cart of products) {
  24 |     await this.page.locator(`//button[@name="add-to-cart-${cart}"]`).click()
  25 | }
  26 |     }
  27 |     async verifyCartCount(){
  28 |         
  29 |     }
  30 | 
  31 | }
  32 | export default Swlabs
```