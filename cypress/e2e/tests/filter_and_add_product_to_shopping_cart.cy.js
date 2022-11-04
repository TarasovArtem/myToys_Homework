/// <reference types="cypress"/>

import { navigation } from "../../objects/navigation";
import { searchbar } from "../../objects/searchBar";
import { sortBar } from "../../objects/sortBar";
import { buttons } from "../../objects/buttons";
import { filters } from "../../objects/filter";
import { productCard } from "../../objects/productCard";
import { shoppingCart } from "../../objects/shoppingCart";
import { utilites } from "../../objects/utilites";

describe('Product verification after filtering and adding to the shopping cart ', () => {

    before(() => {
        navigation.mainPage();
        buttons.cookiesBtn().click();
      })

      
      
    it('Filter cost between 500 and 1000 euros', () => {
        searchbar.inputSearch().type('trampolin');
        searchbar.searchFormBtn().click();
        sortBar.sortSelectMenu(1).select('priceDesc');
        filters.priceFilterBtn().eq(0).click();
        filters.pricerangeSlider_valueStart().eq(0).clear().type(500);
        filters.pricerangeSlider_valueEnd().eq(0).clear().type(1000);
        filters.pricerangeSubmit().eq(0).click();
        filters.priceSubmit().eq(0).click();
        utilites.sortFunc(2, productCard.productPriceReduced);
        utilites.sortFunc(5, productCard.productPrice);

    })

    it('Verification product after successfully added to the shoping cart', () => {
        productCard.productCard(0).click();
        shoppingCart.addToshopCart(0).click();
        shoppingCart.layerContent().should('be.visible');
        shoppingCart.msgSuccess('Der Artikel liegt bereits in deinem Warenkorb.');
        shoppingCart.closeLayerBtn(1).click();
        shoppingCart.iconCartBtn().click();
     })
})