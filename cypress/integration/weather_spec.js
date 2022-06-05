/* eslint-disable */
describe('Weather App with react.js', () => {
  it('', () => {
    cy.visit('/');
    cy.get('input.col').type('Tehran');
    cy.get('.btn').click({multiple: true});
    cy.get('input.col').type('Dubai');
    cy.get('.btn').click({multiple: true});
    cy.get('input.col').type('Germany');
    cy.get('.btn').click({multiple: true});
    cy.get('.weather-table > .row > .col-auto').click();
  });
});
