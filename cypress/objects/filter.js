/// <reference types="cypress"/>


export class Filters {

    priceFilterBtn() {
        return cy.get('[data-effective-value-key="priceFilter"]');
    }

    pricerangeSlider_valueStart() {
        return cy.get('.pricerange__slider__value-start-user');
    }

    pricerangeSlider_valueEnd() {
        return cy.get('.pricerange__slider__value-end-user');
    }

    pricerangeSubmit() {
        return cy.get('.js-price-filter-submit');
    }

    priceSubmit() {
        return cy.get('.js-nfh-submit');
    }
}
export const filters = new Filters();