import { LoginPage } from '../../pages/loginpage';

const loginPage = new LoginPage();

/**
 * @Test Test Scenarios : As a user i want to login to the demo app
 * Given valid username and password
 * Then i can access and check the portal and logout scuessfully
 */
it('Orange HRM Login and Logout E2E Test',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    loginPage.enterusername('Admin').
    enterPassword('admin123').
    performLogin().
    performWelcome().
    performLogout();      
});