export class HomePage{
    
    lbl_welcome = "#welcome";
    btn_logout = "#welcome-menu > :nth-child(1) > :nth-child(3) > a";

    performWelcome(){
        cy.get(this.lbl_welcome).click();
    }

    performLogout(){
        cy.get(this.btn_logout).click();
    }
}