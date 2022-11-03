/// <reference types="cypress"/>

import { navigation } from "../../objects/navigation";
import { buttons } from "../../objects/buttons";
import { filters } from "../../objects/filter";


describe('Product verification after filtering and adding to the shopping cart ', () => {

    before(() => {
        navigation.trampolinPage();
        buttons.cookiesBtn().click();
      })

      beforeEach(() => {
        cy.preserveCookieOnce('connect.session');
      })
      
    it('Filter cost between 500 and 1000 euros', () => {
       filters.priceFilterBtn().eq(0).click();
       filters.pricerangeSlider_valueStart().eq(0).clear().type(500);
       filters.pricerangeSlider_valueEnd().eq(0).clear().type(1000);
       filters.pricerangeSubmit().eq(0).click();
       filters.priceSubmit().eq(0).click();
    })

    it('Verification product after successfully added to the shoping cart', () => {
        cy.get('.prod-grid__item').eq(0).click();
     })
})