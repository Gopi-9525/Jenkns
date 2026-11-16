import{test,expect} from "@playwright/test"
test("possitive login",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//input[@id="password"]').fill("Password123")
    await page.locator('//button[@id="submit"]').click()
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page.locator('//p[@class="has-text-align-center wp-block-paragraph"]')).toContainText("Congratulations student.")
    await expect(page.locator('//a[text()="Log out"]')).toBeVisible()
    
})
test("negative username ",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("gopi")
    await page.locator('//input[@id="password"]').fill("Password123")
    await page.locator('//button[@id="submit"]').click()
    const error=page.locator('//div[@id="error"]')
    await expect (error).toBeVisible()
    await expect(error).toHaveText("Your username is invalid!")
})

test("nagative password",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("student")
    await page.locator('//input[@id="password"]').fill("Pass")
    await page.locator('//button[@id="submit"]').click()
    const errormessage=page.locator('//div[@id="error"]')
    await expect(errormessage).toBeVisible()
    await expect(errormessage).toHaveText("Your password is invalid!")
})

