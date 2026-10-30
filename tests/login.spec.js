
import {test} from '@playwright/test';
import { LoginPage } from '../Pages/Loginpage';

test('Login Test', async ({page}) => {
const loginPage =new LoginPage(page);
await page.goto('https://www.saucedemo.com/');
await loginPage.login('problem_user','secret_sauce')})


test('case2', async ({page}) => {
const loginPage =new LoginPage(page);
await page.goto('https://www.saucedemo.com/');
await loginPage.login('standard_user','secr');

})