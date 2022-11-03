/// <reference types="cypress"/>


export class Sortbar{

    sortSelectMenu() {
        return cy.get('.sort__select');
    } 

    sortProduct() {
        let sortedPrice = ['3.888,99', '3.738,99', '3.658,99', '3.478,99', '3.378,99'];

        sortedPrice.sort((a, b) => a > b );

        for (var i = 0; i < sortedPrice.length; i++) {
        console.log(sortedPrice[i]);
        }
    }


   
}
export const sortBar = new Sortbar();