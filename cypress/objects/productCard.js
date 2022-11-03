/// <reference types="cypress"/>


export class ProductCard {

    productCard() {
        return cy.get('.prod-grid__item').then(($sortedPrice) => {
            let sortedPrice = [2, 4, 98, 56, 34];
    
            sortedPrice.sort((a, b) => (a < b && 1) || (a > b && -1) || 0);
    
            for (var i = 0; i < sortedPrice.length; i++) {
            console.log(sortedPrice[i]);
            }
        });
    }

    productPrice() {
        return cy.get('.prod-tile__price-regular');
    }

   
}
export const productCard = new ProductCard();