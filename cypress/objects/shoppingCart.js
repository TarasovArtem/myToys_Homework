/// <reference types="cypress"/>



export class ShoppingCart {

    addToshopCart(num) {
        return cy.get('button.btn--add-to-cart').eq(num);
    }

    iconCartBtn() {
        return cy.get('.header-shop__cart-btn');
    }

    layerContent() {
        return cy.get('.layer__content ');
    }
    
    msgSuccess(num) {
        return cy.get('.msg-success > p').eq(num).then(($msg_success) => {
            const msg_success = $msg_success.text();
            expect(msg_success).to.eq(msg_success); 
        })
    }

    closeLayerBtn(num) {
        return cy.get('.btn-close--layer').eq(num);
    }
   
}
export const shoppingCart = new ShoppingCart();