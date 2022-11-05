/// <reference types="cypress"/>



export class Searchbar {
    
    inputSearch() {
        return cy.get('.search-form__input');
    }

    textFieldSearch() {
        return cy.get('#text-field-container');
    }

    searchFormBtn() {
        return cy.get('.search-form__btn');
    }

}
export const searchbar = new Searchbar();