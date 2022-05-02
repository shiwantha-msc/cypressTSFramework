import { Clickable } from "../behaviours/clickable";
import { BaseElement } from '../generalize/baseelement';

export class BaseButton extends BaseElement{

    locator :string;
    clickable : Clickable;

    constructor(locator:string){
        super();
        this.locator = locator;
        this.clickable = new Clickable();
    }

    click(){
        cy.get(this.locator).click();
    }
    
}