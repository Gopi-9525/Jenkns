import{test,expect}from"@playwright/test"
test("one @reg",async()=>{
    console.log("test one is executed successfully");
})
test("two @reg",async()=>{
    console.log("test two is executed successfully");
})
test("three @reg @Smoke",async()=>{
    console.log("test three is executed successfully");
})
test("four @Smoke",async()=>{
    console.log("test four is executed successfully");
})
test("five @Smoke @Sanity",async()=>{
    console.log("test five is executed successfully");
})
test("six @Sanity",async()=>{
    console.log("test six is executed successfully");
})
test("seven @Smoke",async()=>{
    console.log("test seven is executed successfully");
})
test("eight @reg",async()=>{
    console.log("test eight is executed successfully");
})

