
import {test} from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';

test('Login Test', async ({page}) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByPlaceholder('Username').fill('standard_user');
// //   await page.waitForTimeout('3000');
//   await page.getByPlaceholder('Password').fill('secret_sauce');
//   //await page.waitForTimeout('3000');
// await page.locator('#login-button').click();


const loginPage =new LoginPage(page);
await page.goto('https://www.saucedemo.com/');
await loginPage.login('standard_user','secret_sauce')})


test('case2', async ({page}) => {
const loginPage =new LoginPage(page);
await page.goto('https://www.saucedemo.com/');
await loginPage.login('standard_user','secr');

})
//saucedemo project added in the github