/// <reference types="cypress"/>


export class ProductCard {

    productCard(num) {
        return cy.get('.prod-grid__item').eq(num);
    }

    productPrice(num) {
        return cy.get('.prod-tile__price-regular').eq(num).then(($span) => {
            const price = parseFloat($span.text())
            expect(price).to.eq(price)
        });
    }

    productPriceReduced(num) {
        return cy.get('.prod-tile__price-reduced').eq(num).then(($span) => {
            const price = parseFloat($span.text())
            expect(price).to.eq(price)
        });  
    }

   
}
export const productCard = new ProductCard();