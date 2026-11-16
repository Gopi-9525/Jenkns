import{expect}from"@playwright/test"
class Checkout{
    constructor(page){
        this.page=page
        this.fname=page.locator('//input[@id="first-name"]')
        this.lname=page.locator('//input[@id="last-name"]')
        this.pcode=page.locator('//input[@placeholder="Zip/Postal Code"]')
        this.continue=page.locator('//input[@id="continue"]')
        this.paymentInformation = page.locator('//div[text()="Payment Information:"]');
        this.shippingInformation = page.locator('//div[text()="Free Pony Express Delivery!"]');
        this.totalPrice =page.locator ('//div[text()="25.90"]');
    }
    async chekingout(fsname,lsname,pscode){
        await this.fname.fill(fsname)
        await this.lname.fill(lsname)
        await this.pcode.fill(pscode)
       await this.continue.click()
await expect(this.page).toHaveTitle("Swag Labs")
await expect(this.paymentInformation).toHaveText("Payment Information:");
await expect(this.shippingInformation).toBeVisible();
await expect(this.totalPrice).toBeVisible();
    }
    
}
export default Checkout