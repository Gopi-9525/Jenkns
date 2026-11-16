import{test,expect} from "@playwright/test"
test("handling tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   const rows=await page.locator('//table[@id="productTable"]/tbody/tr')
     const coloumn=await page.locator('//table[@id="productTable"]/thead/tr/th')
     console.log("ROW:",await rows.count());
     console.log("COLOUMN:",await coloumn.count());
     //Method1
    // await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()
  
     //await rows.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]').check()
    //Method3
 // const phone= await rows.filter({
       //has:page.locator("td"),
      //  hasText:"Smartphone"
    //})
   // await phone.locator('//input[@type="checkbox"]').check()
    //Multiplecheckbox
    //Method1
   // let product=["Smartphone","Laptop","Smartwatch"]
    //for(let i of product){
      //  await rows.locator (`//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check()
    //}
    //Method2
   const phone= await rows.filter({
    has: page.locator("td"),
   // hasText:/Smartphone|Laptop|Smartwatch/
    })
    const products=await phone.all()
    for(let i of products){
        await i.locator('//input[@type="checkbox"]').check()
    }
     //await page.pause()  
})