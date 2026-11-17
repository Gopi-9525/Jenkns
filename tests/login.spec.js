// Other locators:CSS
import{test,expect} from "@playwright/test"
test("login",async({page})=>{
await page.goto("https://www.facebook.com/")
await page.locator("#_R_1h6kqsqppb6amH1_").fill("example.123@gmail.com")
await page.locator('[type="password"]').fill("Password123")
await page.locator('[aria-label="Log in"]').click()
//await page.waitForTimeout(6000)
  //await page.pause()
})
// Built in locators

test("login using built in locatord",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill(admin123)
await page.getByRole("button",{name:"login"})
//await page.pause()
})

// XPath
//Absolute xpath (Root wise/)line by line
//2.relative Xpath(//tagname@attributename and attribute value)skip
test("login using xpath",async({page})=>{
await page.goto("https://www.facebook.com/")
await page.locator('//input[@name="email"]').fill("example123@gmail.com")
await page.locator('//input[@name="pass"]').fill("Password123")
await page.locator('//span[text()="Log in"]').click()
})
