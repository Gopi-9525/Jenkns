import{test,expect} from "@playwright/test"
import Cred from'../Testdata/login.json'
test("login",async({page})=>{
await page.goto("https://www.facebook.com/")
await page.locator('//input[@name="email"]').fill(Cred.Username)
await page.locator('//input[@type="password"]').fill(Cred.Password)
await page.locator('//span[text()="Log in"]').click()
})