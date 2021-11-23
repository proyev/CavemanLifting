/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/dashboard');
  });
  describe('Page is loading', () => {
    it('Visits the dashboard', () => {
      cy.visit('http://localhost:3000/dashboard');
    });
  });
});
