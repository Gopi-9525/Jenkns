import{test,expect}from'@playwright/test'
test("login",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('[placeholder="Username"]').fill("Admin")
    await page.locator('[type="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()
    //await page.waitForTimeout(6000)
   // await page.pause()
})