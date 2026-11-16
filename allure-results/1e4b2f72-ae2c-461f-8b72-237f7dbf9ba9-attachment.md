# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> pom
- Location: tests\pom.spec.js:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1 | import {test,expect} from "@playwright/test"
  2 | import Orange from "../Pages/hrm"
  3 | import Details from'../Testdata/hm.json'
  4 | 
  5 | test("pom",async({page})=>{
> 6 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  7 | const demo=new Orange(page)
  8 | await demo.hrmlogin()
  9 | })
```