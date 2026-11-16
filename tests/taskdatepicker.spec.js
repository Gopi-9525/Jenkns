import{test,expect} from "@playwright/test"
test("Date Pickers",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="datepicker"]').click()
    await page.locator('//a[text()="23"]').click()
    await page.locator('//input[@id="txtDate"]').click()
    await page.locator('//select[@aria-label="Select month"]').selectOption("4")
    await page.locator('//select[@aria-label="Select year"]').selectOption("2019")
    await page.locator('//a[text()="25"]').click()
    const dates = ['1995-10-25', '2026-10-25'];
     const dateloc = [
    "//input[@placeholder='Start Date']",
    "//input[@placeholder='End Date']"
];
for (let i = 0; i < dates.length; i++) {
    await page.locator(dateloc[i]).fill(dates[i]);
}
    await page.locator('//button[@class="submit-btn"]').click()
})