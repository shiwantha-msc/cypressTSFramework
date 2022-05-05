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

    private txt_username = "#txtUsername";
    private txt_password = "#txtPassword";
    private btn_login = "#btnLogin";

    /**
     * Page load event @loginpage context
     */
    constructor(){}

    /**
     * Panel : Perform enter username event
     * Direct event call
     * @todo Draft version
     */
    public enterusername(user:string){
        new Textfield(this.txt_username).enterText(user);
        return this;
    }

    /**
     * Panel : Perform enter password event
     * Direct event call
     * @todo Draft version
     */
    public enterPassword(pass:string){
        new Textfield(this.txt_password).enterText(pass);
        return this;
    }

    /**
     * Panel : Perform login submit event
     * Direct event call
     * @todo Draft version
     */
    public performLogin(){
        new Button(this.btn_login).click();
        return new HomePage;
    }
}