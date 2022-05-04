import { Typable } from "../behaviours/typable";
import { BaseElement } from "../generalize/baseelement";

export class BaseTextField extends BaseElement{

    locator: string;
    typable: Typable;

    constructor(locator:string){
        super();
        this.locator = locator;
        this.typable = new Typable();
    }

    enterText(value:string) {
        cy.get(this.locator).type(value);
    }
}