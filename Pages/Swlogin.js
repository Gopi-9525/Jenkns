import {expect}from "@playwright/test"
class Saucedemo{
    constructor(page){
        this.page=page
        this.text=page.locator('//div[text()="Swag Labs"]')
        this.user=page.locator('//input[@placeholder="Username"]')
        this.pass=page.locator('//input[@placeholder="Password"]')
        this.button=page.locator('//input[@id="login-button"]')
    }
    async login(uname,pword){
        await expect(this.text).toHaveText("Swag Labs")
        await this.user.fill(uname)
        await this.pass.fill(pword)
        await this.button.click()
        await expect (this.page).toHaveURL("https://www.saucedemo.com/inventory.html")
    }
}
export default Saucedemo;