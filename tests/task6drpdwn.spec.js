import{test,expect}from "@playwright/test"
test("drop down in ways",async({page})=>{
await page.goto("https://letcode.in/dropdowns")
await page.locator('//select[@id="fruits"]').selectOption("Apple")
await expect(page.locator('//p[@class="text-sm font-medium"]')).toHaveText("You have selected Apple ")
await page.locator('//select[@id="lang"]').selectOption({index:4})
await expect(page.locator('//p[@class="text-sm font-medium"]')).toHaveText("You have selected C#")
await page.locator('//select[@id="country"]').selectOption({value:"India"})
await expect (page.locator('//p[@class="text-sm font-medium"]')).toHaveText("Selected Value:India")
//await page.pause()
})
test("multi select drop down",async({page})=>{
    await page.goto("https://letcode.in/dropdowns")
    await page.locator('//select[@id="superheros"]').selectOption(["Aquaman","Batman","Black Panther","Captain Marvel","Doc Savage"])

      const lang=await page.locator('//select[@id="lang"]').textContent() 
      console.log(lang)
      const herocount=await page.locator('//select[@id="superheros"]/option').count()
      await expect (page.locator('//select[@id="superheros"]/option')).toHaveCount(29)
      console.log(herocount)

      const text= await page.locator('//option[@value="India"]').textContent()
      console.log(text)

       //await page.pause()
       
})