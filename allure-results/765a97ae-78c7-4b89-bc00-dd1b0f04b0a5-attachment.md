# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: actions.spec.js >> Scroll
- Location: tests\actions.spec.js:30:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | test("keyboard actions",async({page})=>{
  3  |     await page.goto("https://testautomationpractice.blogspot.com/")
  4  |     await page.locator('//input[@id="name"]').fill("Playwright")
  5  |     await page.keyboard.press("Control+A")
  6  |     await page.keyboard.press("Control+C")
  7  |     await page.keyboard.press("Tab")
  8  |     await page.keyboard.press("Control+V")
  9  |     await page. keyboard.press("Tab")
  10 |     await page.keyboard.press("Control+V")
  11 |     //await page.pause()
  12 | })
  13 | test("Mouse Hover",async({page})=>{
  14 |     await page.goto("https://testautomationpractice.blogspot.com/")
  15 |     await page.locator('//button[text()="Point Me"]').hover()
  16 |     //await page.pause()
  17 | })
  18 | test("Right click",async({page})=>{
  19 |     await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
  20 |     await page.locator('//span[text()="right click me"]').click({button:"right"})
  21 |     //await page. pause()
  22 | })
  23 | test("Doubleclick",async({page})=>{
  24 |   await page.goto("https://testautomationpractice.blogspot.com/")
  25 |   await page.locator('//input[@id="field1"]').fill("Playwright")
  26 |   await page.locator('//button[text()="Copy Text"]').dblclick()
  27 |   await expect(page.locator('//input[@id="field2"]')).toHaveValue("Playwright")
  28 |  // await page.pause()
  29 | })
  30 | test("Scroll",async({page})=>{
> 31 |     await page.goto("https://testautomationpractice.blogspot.com/")
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  32 |     await page.mouse.wheel(0,2000)// x= Horizontal,Y=Vertical
  33 |    // await page.pause()
  34 |     await page.mouse.wheel(0,-2000)
  35 |     //await page.pause()
  36 |     await page.locator('//a[text()="Blogger"]').scrollIntoViewIfNeeded()
  37 |     //await page.pause()
  38 | })
  39 | test("Drag and Drop",async({page})=>{
  40 |     await page.goto("https://testautomationpractice.blogspot.com/")
  41 |     //const source=await page.locator('//div[@id="draggable"]')
  42 |     //const target=await page.locator('//div[@id="droppable"]')
  43 |     //await source.dragTo(target)
  44 |     await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'))
  45 |     //await page.pause()
  46 | })
```