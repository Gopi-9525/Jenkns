import {test,expect} from '@playwright/test'

test("asserion",async({page})=>{https://testautomationpractice.blogspot.com/
    await page.goto("")

    await expect.soft(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect.soft(page).toHaveTitle("Automation Testing Practice")

    await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible()
    await expect(page.locator('//p[@class="description"]/span')).toHaveText("For Selenium, Cypress & Playwright")
    await expect(page.locator('//p[@class="description"]/span')).toContainText("Playwright")

    const input='//input[@id="name"]'

    await expect(page.locator(input)).toBeEmpty()

    await page.locator(input).fill("playwright")
    await expect(page.locator(input)).toHaveValue("playwright")

    await expect(page.locator(input)).not.toBeEmpty()

})