// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import { searchbar } from './../objects/searchBar';
import { filters } from "./../objects/filter";
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//

Cypress.Commands.add('search', (text) => {
    searchbar.inputSearch().type(text);
    searchbar.searchFormBtn().click({force: true});
})

Cypress.Commands.add('priceFilter',(startValue, endValue) => { 
    filters.priceFilterBtn(0).click();
    filters.pricerangeSlider_valueStart(0).clear().type(startValue);
    filters.pricerangeSlider_valueEnd(0).clear().type(endValue);
    filters.pricerangeSubmit(0).click();
    filters.priceSubmit(0).click();
})