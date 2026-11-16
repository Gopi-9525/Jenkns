import{test,expect} from "@playwright/test"
test("frame using framelocator",async({page})=>{
    await page.goto("https://letcode.in/frame")
    const frame=await page.frameLocator('//iframe[@id="firstFr"]')
    await frame.locator('//input[@name="fname"]').fill("Gopinath")
    await frame.locator('//input[@name="lname"]').fill("Nagarajan")
    const nestedframe= frame.frameLocator('//div[@id="root"]/child::div')
    await nestedframe.locator('//input[@name="email"]').fill("gopi@gmail.com")
    
    //await page.pause()
})