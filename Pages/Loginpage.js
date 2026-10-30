
export class LoginPage{
    constructor(page){
        this.page= page;
        this.userNameField = page.getByPlaceholder('Username');
        this.passwordField = page.getByPlaceholder('Password');
        this.loginBtn = page.locator('#login-button');
    }
    async login(username,Password){
        await this.userNameField.fill(username);
        await this.page.waitForTimeout (2000);
        await this.passwordField.fill(Password);
        await this.page.waitForTimeout (2000);
        await this.loginBtn.click();
        await this.page.waitForTimeout (2000);
        
    }
    

}
