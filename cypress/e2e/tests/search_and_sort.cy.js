/// <reference types="cypress"/>

import { navigation } from "../../objects/navigation";
import { sortBar } from "../../objects/sortBar";
import { productCard } from "../../objects/productCard";
import { utilites } from "../../objects/utilites";

describe('Product verification after searching and sorting', () => {

    beforeEach(() => {
        navigation.mainPage(); 
        cy.search('trampolin'); 
      })
      
    it('Search by product type of trampolin', () => {    
        navigation.getUrl('/suche/trampolin/');
        navigation.getTitle('trampolin | myToys');
        utilites.sortFunc(5, productCard.productName);  
    })

    it('Verify sort by Highest price', () => {      
      sortBar.sortSelectMenu(1).select('priceDesc');
      utilites.sortFunc(5, productCard.productPrice);    
  })
}) 