import {expect}from "@playwright/test"
class Swlabs{
    constructor(page){
        this.page=page;
        this.products=page.locator('//span[text()="Products"]')
        this.sortDropdown=page.locator('//select[@class="product_sort_container"]')
        this.CartCount=page.locator('//span[text()="2"]')
        
    }
    async verifyproducts(){
    await expect (this.products).toHaveText("Products")
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }
    async sortproducts(){
        await (this.sortDropdown).selectOption({index:2})
  
    }
    async addproducts(){
        const products = [
    "sauce-labs-onesie",
    "sauce-labs-bolt-t-shirt"
]
for (const cart of products) {
    await this.page.locator(`//button[@name="add-to-cart-${cart}"]`).click()
}
    }
    

}
export default Swlabs