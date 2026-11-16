import {test,expect} from "@playwright/test"
import Orange from "../Pages/hrm"
import Details from'../Testdata/hm.json'

test("pom",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const demo=new Orange(page)
    await demo.hrmlogin(Details.Username,Details.Password)
})