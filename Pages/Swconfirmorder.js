import {expect} from "@playwright/test"
class Confirmorder{
    constructor(page){
        this.page=page
        this.finishButton = page.locator('//button[@id="finish"]');
        this.completeText =page.locator('//span[text()="Checkout: Complete!"]');
        this.ponyExpressImage = page.locator('//img[@data-test="pony-express"]');
        this.thankYouText =page.locator ('//h2[text()="Thank you for your order!"]');
        this.backToProductsButton = page.locator('//button[@id="back-to-products"]');
        this.productsText =page.locator('//span[text()="Products"]');
}
  async completeorder(){
await this.finishButton.click();
await expect((this.completeText)).toHaveText("Checkout: Complete!");
await expect((this.ponyExpressImage)).toBeVisible();
await expect((this.thankYouText)).toHaveText("Thank you for your order!");
await this.backToProductsButton.click();
await expect((this.productsText)).toBeVisible();
  }
}
export default Confirmorder