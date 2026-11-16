import{test,expect} from "@playwright/test"
test("simple alert",async({page})=>{
    await page.goto("https://letcode.in/alert")
    page.on("dialog",async alrt =>{
        console.log(alrt.message())
       expect( alrt.message("Hey! Welcome to LetCode"))
       await alrt.accept()
    })
    await page.locator('//button[@id="accept"]').click()
    await page.waitForTimeout(8000)
})
test("confirmation alert",async({page})=>{
    await page.goto("https://letcode.in/alert")
    page.on("dialog",async alert=>{
        expect(alert.message()).toBe("Are you happy with LetCode?")
        await alert.dismiss()
    })
    await page.locator('//button[@id="confirm"]').click()
    await expect (page.locator('//div[@class="mt-3 text-xs text-slate-500"]')).toHaveText("User selected: Cancel (False)")
    await page.waitForTimeout(5000)
})
test("prompt alert",async({page})=>{
    await page.goto("https://letcode.in/alert")
    page.on("dialog",async alert=>{
        expect (alert.message("Enter your name"))
        await alert.accept("Gopi")
    })
    await page.locator('//button[@id="prompt"]').click()
    await expect(page.locator('//p[@id="myName"]/parent::div')).toHaveText('Your name is: Gopi')
    await page.waitForTimeout(5000)
})

 