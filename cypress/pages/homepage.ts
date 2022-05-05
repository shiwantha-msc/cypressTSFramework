import { HeaderPanel } from '../panels/headerpanel';

/**
 * Page: Include @homepage context related component attributes and behaviours
 * componets - variables
 * behavious - methods
 * module import - @headerpanel will load under constructor as a composition class
 * @author ShiwanthaL
 * @todo Draft version
 */
export class HomePage{
    
    private lbl_welcome = "#welcome";
    private btn_logout = "#welcome-menu > :nth-child(1) > :nth-child(3) > a";

    headerPanel:HeaderPanel;

    /**
     * Page load event @homepage context
     */
    constructor(){        
        this.headerPanel =  new HeaderPanel();
    }

    /**
     * Page : Perform profile welcome drop-down icon to list down action-list
     * Indirect event call
     * @todo Draft version
     */
    private performWelcome(){
        this.headerPanel.performWelcome();
        return this;
    }

    /**
     * Page : Perform logout action from profile list down action-list
     * Indirect event call
     * @todo Draft version
     */
    private performLogout(){
        this.headerPanel.performLogout();
    }
}