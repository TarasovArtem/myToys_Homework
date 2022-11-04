/// <reference types="cypress"/>


export class ShoppingCart {

    addToshopCart(num) {
        return cy.get('.btn--add-to-cart').eq(num);
    }

    iconCartBtn() {
        return cy.get('.header-shop__cart-btn');
    }

    layerContent() {
        return cy.get('.layer__content ');
    }
    
    msgSuccess(text) {
        return cy.get('.msg-success').should('contain', text);
    }

    closeLayerBtn(num) {
        return cy.get('.btn-close--layer').eq(num);
    }
   
}
export const shoppingCart = new ShoppingCart();