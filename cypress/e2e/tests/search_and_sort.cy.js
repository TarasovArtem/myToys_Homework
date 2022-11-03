/// <reference types="cypress"/>

import { navigation } from "../../objects/navigation";
import { searchbar } from "../../objects/searchBar";
import { buttons } from "../../objects/buttons";
import { sortBar } from "../../objects/sortBar";
import { productCard } from "../../objects/productCard";

describe('Product verification after searching and sorting', () => {

    before(() => {
        navigation.mainPage();
        buttons.cookiesBtn().click();
      })

      beforeEach(() => {
        cy.preserveCookieOnce('connect.session');
      })
      
    it('Search by product type, sort by price of products', () => {
        searchbar.inputSearch().type('trampolin');
        searchbar.searchFormBtn().click();
        sortBar.sortSelectMenu().eq(1).select('priceDesc');
        //productCard.productCard();
        //productCard.productCard().eq(0).should('contain', $price);   
    })
}) 