/// <reference types="cypress"/>


export class Buttons {
    cookiesBtn() {
        return cy.get('#onetrust-accept-btn-handler');
    }

}
export const buttons = new Buttons();