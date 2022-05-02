import { LoginPage } from '../../pages/loginpage';

const loginPage = new LoginPage();

it('Orange HRM Login and Logout E2E Test',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    loginPage.enterusername('Admin').
    enterPassword('admin123').
    performLogin().
    performWelcome().
    performLogout();      
});