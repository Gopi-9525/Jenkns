import {expect}from "@playwright/test"
class Shopping{
    constructor(page){
        this.page=page
        this.cartlink=page.locator('//a[@data-test="shopping-cart-link"]')
        this.carttitle=page.locator('//span[text()="Your Cart"]')
        this.productname=page.locator('//div[text()="Sauce Labs Onesie"]')
        this.price=page.locator('//div[text()="15.99"]')
        this.button=page.locator('//button[@id="checkout"]')
}
async opencart(){
    await this.cartlink.click()
}
async verifycartpage(){
await expect(this.page).toHaveURL("https://www.saucedemo.com/cart.html")
await expect(this.carttitle).toHaveText("Your Cart")
await expect(this.productname).toBeVisible()
await expect(this.price).toBeVisible()
await this.button.click()

}

}
export default Shopping