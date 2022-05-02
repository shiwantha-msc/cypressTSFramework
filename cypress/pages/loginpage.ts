import { HomePage } from './homepage';
/**
 * Panel: Include @loginpage context related component attributes and behaviours
 * componets - variables
 * behavious - methods
 * @author ShiwanthaL
 * @todo Draft version
 */
export class LoginPage {

    txt_username = "#txtUsername";
    txt_password = "#txtPassword";
    btn_login = "#btnLogin";

    /**
     * Page load event @loginpage context
     */
    constructor(){}

    /**
     * Panel : Perform enter username event
     * Direct event call
     * @todo Draft version
     */
    enterusername(user:string){
        cy.get(this.txt_username).type(user);
        return this;
    }

    /**
     * Panel : Perform enter password event
     * Direct event call
     * @todo Draft version
     */
    enterPassword(pass:string){
        cy.get(this.txt_password).type(pass);
        return this;
    }

    /**
     * Panel : Perform login submit event
     * Direct event call
     * @todo Draft version
     */
    performLogin(){
        cy.get(this.btn_login).click();
        return new HomePage();
    }
}