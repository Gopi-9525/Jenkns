import {expect}from "@playwright/test"
class Logout{
    constructor(page){
        this.page=page
        this.menuButton = page.locator('//button[@id="react-burger-menu-btn"]');
        this.logoutButton = page.locator('//a[@id="logout_sidebar_link"]');
        this.usernameField = page.locator('//input[@placeholder="Username"]');
    }
    async lout(){
    await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await this.menuButton.click();
    await this.logoutButton.click();
    await expect(this.usernameField).toBeVisible();
    }
}
export default Logout