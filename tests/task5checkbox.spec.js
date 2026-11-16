import{test,expect} from "@playwright/test"
test("radio buuton",async({page})=>{
    await page.goto("https://letcode.in/radio")
    await page.locator('//input[@id="yes"]').check()
    await expect(page.locator('//input[@id="yes"]')).toBeChecked()
    await expect(page.locator('//input[@id="no"]')).not.toBeChecked()
    await page.locator('//input[@id="nobug"]').check()
    await page.locator('//input[@id="bug"]').check()
})
    test("checkbox",async({page})=>{
    await page.goto("https://letcode.in/radio")
    const yes = page.locator('//input[@id="yes"]');
     await yes.check();
     await expect(yes).toBeChecked();
    await expect(page.locator('//input[@id="foo"]')).not.toBeChecked()
    await expect(page.locator('//span[text()="Maybe"]')).toBeDisabled()
    await page.locator('//span[text()="Remember me"]/preceding-sibling::input[@type="checkbox"]').check()
await expect(page.locator('//label[text()="Accept the T&C"]/following-sibling::label/input[@type="checkbox"]')).toBeEnabled()
})