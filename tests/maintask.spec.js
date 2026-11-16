import {test,expect}from "@playwright/test"
import Saucedemo from "../Pages/Swlogin.js"
import Cred from"../Testdata/Swlog.json"
import Swlabs from "../Pages/swproducts.js"
import Shopping from "../Pages/Swshopingcart.js"
import Checkout from "../Pages/Swcheckout.js"
import personal from"../Testdata/Swlcheckout.json"
import Confirmorder from "../Pages/Swconfirmorder.js" 
import Logout from "../Pages/Swlogout.js"

test ("MainTask",async({page})=>{
    //Step1:Login
    await page.goto("https://www.saucedemo.com/")
  

    const log=new Saucedemo(page)
   await log.login(Cred.Username,Cred.Password)

    //Step2:Select products
    const Products=new Swlabs(page)
    await Products.verifyproducts()
    await Products.sortproducts()
    await Products.addproducts()
    
  

   //Step3 :Verify Shopping Cart
   const cart=new Shopping(page)
   await cart.opencart()
   await cart.verifycartpage()

   
   //Step4:Enter Checkout
   const cout=new Checkout(page)
   await cout.chekingout(personal["First Name"],personal["Last Name"],personal["Zip/Postal Code"])
   
  //Step5:Confirm Order
  const corder=new Confirmorder(page)
  await corder.completeorder()
   //Step6:Logout
   const lgout=new Logout(page)
   await lgout.lout()
   
})

