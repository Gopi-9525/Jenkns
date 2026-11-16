import {test,expect, chromium} from "@playwright/test"
test("handling tabs",async()=>{
    const browswer=await chromium.launch()
    const context=await browswer.newContext()
    const pageone= await context.newPage()
    await pageone.goto("https://testautomationpractice.blogspot.com/")
    console.log(await pageone.title());
    await pageone.locator('//input[@id="name"]').fill("javascript")
    await pageone.waitForTimeout(4000)
    const pagetwo=await context.newPage()
    await pagetwo.goto("https://www.facebook.com/")
    console.log(await pagetwo.title());
    await pagetwo.locator('//input[@name="email"]').fill("gopi@gmail.com")
    await pagetwo.waitForTimeout(4000)
    
})
