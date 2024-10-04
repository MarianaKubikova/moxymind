import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.spec';

test.describe('Login Test Cases', ()=> {
    test.beforeEach(async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    })

test('Sucessfull Login with correct credentials', async ({page}) => {
    test.info().annotations.push({
        type: 'Test',
        description: 'This test will pass when user is sucessfully logged and next page is opened'
    })
    const loginPage = new LoginPage(page);
    await expect(page).toHaveTitle('Swag Labs');
    await loginPage.login();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
})

test('Login with empty username and password fields', async ({page}) => {
    const loginPage = new LoginPage(page);
    test.step('Click on Login Button', async () => {
    await loginPage.clickLoginButton();
    })
    await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible();
})

test('Login with incorrect username and correct password', async ({page}) => {
    const loginPage  = new LoginPage(page);
    await loginPage.enterInvalidUserName();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();
    await expect(loginPage.invalidPasswordErrorMessage).toBeVisible();
})

test('Login with correct username and wrong password', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterValidUserName();
    await loginPage.enterInvalidPassword();
    await loginPage.clickLoginButton();
    await expect(loginPage.invalidPasswordErrorMessage).toBeVisible();
})

test('Cannot login with locked out user @tag', async ({ page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterLockedOutUserName();
    await loginPage.enterValidPassword();
    await loginPage.clickLoginButton();
    await expect(loginPage.lockedOutUserErrorMessage, 'Locked out user error is not displayed').toBeVisible();   
 })

test.skip('Visual test - Login Page is correctly displayed', async ({page}) => {
    test.info().annotations.push({
        type: 'Test',
        description: 'This test is for demonstrate visual testing based on screenshots'
    })
   // page.goto('http://google.com');
    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
})
})
