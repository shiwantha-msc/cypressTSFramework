import { Button } from "../../cypress-ui-core/elements/button";

/**
 * Panel: Include @headerpanel context related component attributes and behaviours
 * componets - variables
 * behavious - methods
 * @author ShiwanthaL
 * @todo Draft version
 */
export class HeaderPanel{

    private lbl_welcome = "#welcome";
    private btn_logout = "#welcome-menu > :nth-child(1) > :nth-child(3) > a";

    /**
     * Panel : Perform profile welcome drop-down icon to list down action-list
     * Direct event call
     * @todo Draft version
     */
    private performWelcome(){
        new Button(this.lbl_welcome).click();
    }

    /**
     * Panel : Perform logout action from profile list down action-list
     * Direct event call
     * @todo Draft version
     */
    private performLogout(){
        new Button(this.btn_logout).click();
    }
}