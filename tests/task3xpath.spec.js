//Orange
import{test,expect}from "@playwright/test"
test("loging using XPath",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/auth/login")
    await page.locator('//input[@placeholder="Username"]').fill("Admin")
    await page.locator('//input[@placeholder="Password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    //await page.pause()
})

    

//demo
test("login through xpath demo",async({page})=>{
    await page.goto("https://demoqa.com/login")
    await page.locator('//button[@id="newUser"]').click()
    await page.locator('//input[@placeholder="First Name"]').fill("Gopi")
    await page.locator('//input[@placeholder="Last Name"]').fill("Nagarajan")
    await page.locator('//input[@placeholder="UserName"]').fill("Gopi")
    await page.locator('//input[@placeholder="Password"]').fill("Gopi@9525")
    await page.locator('//button[@id="register"]').click()
    await page. locator('//button[@id="gotologin"]').click()
    await page.locator('//input[@placeholder="UserName"]').fill("Gopi")
    await page.locator('//input[@placeholder="Password"]').fill("Gopi@9525")
    await page.locator('//button[@id="login"]').click()
    //await page.pause()
})
// flipcart
test("login into flipcart",async({page})=>{
    await page.goto("https://www.flipkart.com/search?q=iphone%2015%20pro%20max&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off")
    await page.locator('//div[@style="background: rgb(0, 160, 152);"]')
})
