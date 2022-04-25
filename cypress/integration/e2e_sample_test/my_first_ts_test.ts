/// <reference types="cypress" />

it('Orange HRM Login Test',() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();

    cy.wait(5000);

    cy.get('#welcome').click();
    cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click();
});