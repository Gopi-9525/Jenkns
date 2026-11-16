import { test, expect } from '@playwright/test'

test("single select dropdown", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.locator('//select[@id="country"]').selectOption("United Kingdom");
    // await page.locator('//select[@id="country"]').selectOption({value:"india"});
    await page.locator('//select[@id="country"]').selectOption({index:4});
    const text=await page.locator('//select[@id="country"]').textContent()//=> single locator text,innertext => invisible text,all text content=>multiple locator values
console.log(text)
const ddcount=await page.locator('//select[@id="country"]/option').count()
await expect (page.locator('//select[@id="country"]/option')).toHaveCount(10)
console.log(ddcount)
    //await page.pause()
})
test("multi select dropdown", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//select[@id="colors"]').selectOption(["Red", "Blue", "Yellow"])
    

    //await page.pause()
})


