import {test,expect} from "@playwright/test"
test("uploading single fike",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/gopin/OneDrive/Pictures/Screenshots/Screenshot 2026-09-11 080306.png")
    await page.locator('//button[text()="Upload Single File"]').click()
    await expect (page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: Screenshot 2026-09-11 080306.png,")
  //  await page.pause()
})

test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/gopin/OneDrive/Pictures/134227684872095172.jpg","C:/Users/gopin/OneDrive/Pictures/Screenshot 2026-08-18 173812.png"])
    await page.locator('//button[text()="Upload Multiple Files"]').click()
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText("Multiple files selected:")
    //await page.pause()
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])
})
test("dowloadfile",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileDownload.html")
    const [downloadedfile]= await Promise.all([
        page.waitForEvent("download"),
        page.locator('//a[text()="Download"and @type="button"]').click()
    ])   
    const file="C:/Users/gopin/OneDrive/Desktop/Playwright/files/sample.pdf"
    await downloadedfile.saveAs(file)
   // await page.pause()
})