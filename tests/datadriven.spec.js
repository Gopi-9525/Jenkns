import{test,expect} from "@playwright/test"
import Cred from'../Testdata/login.json'
test("login",async({page})=>{
await page.goto("https://www.facebook.com/")
await page.locator("#_R_1h6kqsqppb6amH1_").fill(Cred.username)
await page.locator('[type="password"]').fill(Cred.Password)
await page.locator('[aria-label="Log in"]').click()
})