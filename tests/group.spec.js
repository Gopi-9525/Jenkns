import{test,expect} from "@playwright/test"
test.describe("Personal",async()=>{
    test("aadhar",async()=>{
        console.log("Aadhar Details");  
    })
    test("Pan",async()=>{
        console.log("Pan Details");  
    })
})
test.describe("Work",async()=>{
    test("education",async()=>{
        console.log("Education Details"); 
    })
    test("experiance",async()=>{
        console.log("Experiance Details"); 
    })
    test("project",async()=>{
        console.log("Project Details"); 
    })
    test("TC",async()=>{
        console.log("Terms and Conditions"); 
    })  
})
