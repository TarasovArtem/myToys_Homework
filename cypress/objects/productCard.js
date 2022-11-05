/// <reference types="cypress"/>



export class ProductCard {

    productCard(num) {
        return cy.get('.prod-grid__item').eq(num);
    }

    productPrice(num) {
        return cy.get('.prod-tile__price-regular').eq(num).then(($span) => {
            const price = parseFloat($span.text());
            expect(price).to.eq(price);
        });
    }

    productPriceReduced(num) {
        return cy.get('.prod-tile__price-reduced').eq(num).then(($span) => {
            const price = parseFloat($span.text());
            expect(price).to.eq(price);
        });  
    }

    productName() {
        return cy.get('.prod-tile__brand').eq(0).then(($span) => {
            const name = $span.text();
            expect(name).to.eq(name); 
        })
    }

    productNameCard() {
        return cy.get('.prod-info__brand').then(($h1) => {
            const name = $h1.text();
            expect(name).to.eq(name); 
        })
    }

    productNameintoCart() {
        return cy.get('.brand___QDsEV').then(($span) => {
            const name = $span.text();
            expect(name).to.eq(name); 
        })
    }
   
}
export const productCard = new ProductCard();