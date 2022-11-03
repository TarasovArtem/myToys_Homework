/// <reference types="cypress"/>

export class Navigation {
    mainPage() {
        return cy.visit('/');
    }

    trampolinPage() {
        return cy.visit('/sport-garten/gartenspielgeraete-cat2/trampolin/');
    }
}
export const navigation = new Navigation();