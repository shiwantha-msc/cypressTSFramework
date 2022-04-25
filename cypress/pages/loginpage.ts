export class LoginPage {

    txt_username = "#txtUsername";
    txt_password = "#txtPassword";
    btn_login = "#btnLogin";

    enterusername(user:string){
        cy.get(this.txt_username).type(user);
    }

    enterPassword(pass:string){
        cy.get(this.txt_password).type(pass);
    }

    performLogin(){
        cy.get(this.btn_login).click();
    }
}