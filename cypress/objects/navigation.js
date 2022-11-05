/// <reference types="cypress"/>



export class Navigation {
    
    mainPage() {
        return cy.visit('/');
    }

    getUrl(url) {
        return cy.url().should('include', url);
    }

    getTitle(title) {
        return cy.title().should('eq', title);
    }

}
export const navigation = new Navigation();