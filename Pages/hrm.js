class Orange{
    constructor(page){
        this.page=page;
        this.user=page.locator('//input[@name="username"]')
        this.pass=page.locator('//input[@type="password"]')
        this.button=page.locator('//button[@type="submit"]')
    }
    async hrmlogin(uname,pword){
       await  this.user.fill(uname)
       await this.user.fill(pword)
       await this.button.click()

    }
}
export default Orange;