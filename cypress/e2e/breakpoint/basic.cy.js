/// <reference types="cypress" />

describe('Breakpoint', () => {
  it('small mobile should ', () => {
    cy.viewport(320, 480)
    cy.visit('http://localhost:8080')
    cy.get('.title').should('have.text', 'Hello World')
  })
})
