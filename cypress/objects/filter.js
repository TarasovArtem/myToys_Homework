/// <reference types="cypress"/>



export class Filters {

    priceFilterBtn(num) {
        return cy.get('[data-effective-value-key="priceFilter"]').eq(num);
    }

    pricerangeSlider_valueStart(num) {
        return cy.get('.pricerange__slider__value-start-user').eq(num);
    }

    pricerangeSlider_valueEnd(num) {
        return cy.get('.pricerange__slider__value-end-user').eq(num);
    }

    pricerangeSubmit(num) {
        return cy.get('.js-price-filter-submit').eq(num);
    }

    priceSubmit(num) {
        return cy.get('.js-nfh-submit').eq(num);
    }

}
export const filters = new Filters();