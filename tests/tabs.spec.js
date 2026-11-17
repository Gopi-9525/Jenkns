import{test,expect, chromium} from '@playwright/test'
test("handling tabs",async()=>{
    const browser=await chromium.launch()
    // context= new window
    const context= await browser.newContext()
    const pageone=await context.newPage()
    await pageone.goto("https://testautomationpractice.blogspot.com/")
    console.log(await pageone.title());
    await pageone.locator('//input[@id="name"]').fill("Javascript")
    await pageone.waitForTimeout(5000)
    const pagetwo=await context.newPage()
    await pagetwo.goto("https://www.facebook.com/")
    console.log(await pagetwo.title());
    await pagetwo.locator('//input[@name="email"]').fill("gopi@gmail.com")
    await pagetwo.waitForTimeout(5000)
    
})
test("tab handling",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.title());
    await page.locator('//input[@name="username"]').fill("Playwright")
     const [newtab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('//a[text()="OrangeHRM, Inc"]').click()
     ])
     await newtab.waitForLoadState()// wait for page to load fully
     await newtab.locator('//a[@href="/book-a-free-demo"]/child::button').click()
     //await newtab.pause()
    
})
test("pagenavigation",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("Username").fill("Admin")
await page.getByPlaceholder("Password").fill("admin123")
await page.getByRole("button",{name:"login"}).click()// Home page
//await page.pause()
await page.goBack()// Login page
//await page.pause()
await page.goForward()//Homepage
//await page.pause()
await page.reload()
//await page.pause()
})

