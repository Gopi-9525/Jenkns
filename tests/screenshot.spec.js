import{test,expect} from"@playwright/test"
test("Screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.screenshot({path:"C:/Users/gopin/OneDrive/Desktop/Playwright/files/"+"Automation.png"})
//await page.screenshot({path:"C:/Users/gopin/OneDrive/Desktop/Playwright/files/"+"AutomationFull.png",fullpage:true})
await page.locator('//img[@class="wikipedia-icon"]').screenshot({path:"C:/Users/gopin/OneDrive/Desktop/Playwright/files/"+"wikipedia.png"})
})