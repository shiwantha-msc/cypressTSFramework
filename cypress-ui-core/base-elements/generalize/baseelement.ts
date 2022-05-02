import { GenericElement } from "./genericelement";

export class BaseElement implements GenericElement{

    getText(): string {
        return 'Component Method'
    }

    isDisplayed(): boolean {
        return true;
    }

}