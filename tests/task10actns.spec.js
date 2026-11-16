import{test,expect} from "@playwright/test"
test("Actions Task",async({page})=>{
    await page.goto("https://www.myntra.com/")
    await page.locator('//a[@data-group="men"]').hover()
    await page.locator('//a[@href="/men-tshirts"]').click()
    await expect(page.locator('//span[text()="Men T-shirts"]')).toHaveText("Men T-shirts")
    //await page.pause
})
test("Drag and Drop",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Static.html")
    await page.locator('//img[@id="angular"]').dragTo(page.locator('//div[@id="droparea"]'))
    await page.locator('//img[@id="mongo"]').dragTo(page.locator('//div[@id="droparea"]'))
    await page.locator('//img[@id="node"]').dragTo(page.locator('//div[@id="droparea"]'))
    //await page.pause()
})