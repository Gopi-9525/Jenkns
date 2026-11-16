import{test,expect} from "@playwright/test"
test("frame using frame method",async ({page})=>{
    await page.goto("https://practice-automation.com/iframes/")
   // const automation=await page.frames()
    //console.log("Frame count:",automation.length);
    //for(let i of automation){
     //   console.log("Frame url:",i.url());   
    //}

    const playwright=await page.frame({name:"top-iframe"})
    await playwright.locator('//a[text()="Docs"]').click()
    const selenium=await page.frame({url:"https://www.selenium.dev/"})
    await selenium.locator('//span[text()="Downloads"]').click()

})
test("frame using frame locator",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/")
    const playwright=page.frameLocator('//iframe[@name="top-iframe"]')
    await playwright.locator('//a[text()="Docs"]').click()
    const selenium=page.frameLocator('//iframe[@name="bottom-iframe"]')
    await selenium.locator('//span[text()="Downloads"]').click()
    //await page.pause()
})
test("frame using nestedframe",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")
    await page.locator('//a[text()="Iframe with in an Iframe"]').click()
    //Frame Method:
    //const iframe=await page.frame(url:"MultipleFrames.html")
    //Nested iframe:
    //const nestediframe=await iframe.childFrames()[0]
    //await nestedframe.locator('//input[@type="text"]').fill("Playwright")

    //Framelocator Method:
    const iframe= await page.frameLocator('//div[@id="Multiple"]/iframe')
    const nestedFrame=await iframe.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')
    await nestedFrame.locator('//input[@type="text"]').fill("Playwright")
    //await page.pause()
    
})
