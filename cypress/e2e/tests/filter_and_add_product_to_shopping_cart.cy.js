/// <reference types="cypress"/>

import { navigation } from "../../objects/navigation";
import { sortBar } from "../../objects/sortBar";
import { productCard } from "../../objects/productCard";
import { shoppingCart } from "../../objects/shoppingCart";
import { utilites } from "../../objects/utilites";

describe('Product verification after filtering and adding to the shopping cart ', () => {

    beforeEach(() => {
        navigation.mainPage();
        cy.search('trampolin');
      })
  
    it('Filter costs between 500 and 1000 euros', () => {
        sortBar.sortSelectMenu(1).select('priceDesc');
        cy.priceFilter(500, 1000);
        utilites.sortFunc(2, productCard.productPriceReduced);
        utilites.sortFunc(5, productCard.productPrice);
    })

    it('Verification product after successfully added to the shoping cart', () => {
        productCard.productCard(0).click();
        productCard.productNameCard();
        shoppingCart.addToshopCart(0).click();
        shoppingCart.layerContent().should('be.visible');
        shoppingCart.msgSuccess(0);
        shoppingCart.closeLayerBtn(0).click({force: true});
        shoppingCart.iconCartBtn().click();
        productCard.productNameintoCart();
     })
})