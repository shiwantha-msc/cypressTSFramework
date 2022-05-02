import { HomePage } from './homepage';
import { Textfield } from '../../cypress-ui-core/elements/textfield';
import { Button } from '../../cypress-ui-core/elements/button';

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
        new Textfield(this.txt_username).enterText(user);
        return this;
    }

    /**
     * Panel : Perform enter password event
     * Direct event call
     * @todo Draft version
     */
    enterPassword(pass:string){
        new Textfield(this.txt_password).enterText(pass);
        return this;
    }

    /**
     * Panel : Perform login submit event
     * Direct event call
     * @todo Draft version
     */
    performLogin(){
        new Button(this.btn_login).click();
        return new HomePage;
    }
}