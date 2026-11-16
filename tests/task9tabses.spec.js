import {test,expect} from "@playwright/test"
test("handling tabs",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/search?q=apple+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=apple+mobile%7CMobiles&requestId=29cf0362-9dcf-47f4-aaa0-a4d59e65fb6e&as-searchtext=apple")
    const [newtab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator('//div[text()="Apple iPhone 16 (Black, 128 GB)"]').click()

    ])
    await newtab.waitForLoadState()
   await expect(newtab.locator('//h1[text()="Apple iPhone 16 (Black, 128 GB)"]')).toHaveText("Apple iPhone 16 (Black, 128 GB)")
await newtab.pause()
})
//page navigation//
test("page navigation",async({page})=>{
    await page.goto("https://www.flipkart.com/search?q=apple+mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_5_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=apple+mobile%7CMobiles&requestId=29cf0362-9dcf-47f4-aaa0-a4d59e65fb6e&as-searchtext=apple")
    await page.locator('//div[text()="Apple iPhone 16 (Teal, 128 GB)"]').click()
    //await page.pause()
    await page.goBack()
    //await page.pause()
    await page.goForward()
    //await page.pause()
    await page.reload()
    //await page.pause()
})
