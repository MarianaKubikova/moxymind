import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidPasswordErrorMessage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedOutUserErrorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.userNameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.invalidPasswordErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required');
        this.lockedOutUserErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
    }

    async goToLoginPage(){
        await this.page.goto('https://saucedemo.com/');
    }

    async enterValidUserName(){
        await this.userNameInput.fill('standard_user');
    }

    async enterInvalidUserName(){
        await this.userNameInput.fill('username_random');
    }

    async enterValidPassword(){
        await this.passwordInput.fill('secret_sauce');

    }

    async enterInvalidPassword(){
        await this.passwordInput.fill('password_random');

    }

    async enterLockedOutUserName(){
        await this.userNameInput.fill('locked_out_user');
    }

    async clickLoginButton(){
        await this.loginButton.click();
    } 

    async login(){
        await this.userNameInput.fill('standard_user');
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
}