import {test,expect} from '@playwright/test'
import * as xlsx from 'xlsx';

const workbook=xlsx.readFile("C:/Users/gopin/OneDrive/Desktop/Login.xlsx");
const sheet=workbook.Sheets['Sheet1'];
const excelData=xlsx.utils.sheet_to_json(sheet);

for(let data of excelData){

    test(`Login SwagLabs using ${data.Username}`,async({page})=>{
        await page.goto("https://www.saucedemo.com/");
        await page.setViewportSize({width:375, height:667})

        await page.locator('//input[@id="user-name"]').fill(data.Username.trim());
        await page.locator('//input[@id="password"]').fill(data.Password.trim());
        await page.locator('//input[@id="login-button"]').click();

    })
}

// npm install xlsx

// [
//     {
//         "S.NO":1,
//         "USERNAME":"standard_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":2,
//         "USERNAME":"problem_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":3,
//         "USERNAME":"performance_glitch_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":4,
//         "USERNAME":"error_user",
//         "PASSWORD":"secret_sauce"
//     },
//     {
//         "S.NO":5,
//         "USERNAME":"visual_user",
//         "PASSWORD":"secret_sauce"
//     }
// ]