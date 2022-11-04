/// <reference types="cypress"/>


export class Sortbar{

    sortSelectMenu(num) {
        return cy.get('.sort__select').eq(num);
    } 




   
}
export const sortBar = new Sortbar();