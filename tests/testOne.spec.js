import{test,expect} from "@playwright/test"
test("Page navigation",async({page})=>{
await page.goto("https://www.facebook.com/")
})

 
