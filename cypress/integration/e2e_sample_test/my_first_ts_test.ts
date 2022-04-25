import { LoginPage } from '../../pages/loginpage';
import { HomePage } from '../../pages/homepage';

const loginPage = new LoginPage();
const homePage = new HomePage();

it('Orange HRM Login Test',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    loginPage.enterusername('Admin');
    loginPage.enterPassword('admin123');
    loginPage.performLogin();

    cy.wait(5000);

    homePage.performWelcome();
    homePage.performLogout();
        
});