export class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = "#login2";
        this.usernameInput = "//*[@id='loginusername']";
        this.passwordInput = "#loginpassword";
        this.loginButton = "//button[text()='Log in']";
    }

    async goToLoginDialog() {
        await this.page.goto('https://demoblaze.com/index.html');
        await this.page.locator(this.loginLink).click();
    }

    async login(username, password) {
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}