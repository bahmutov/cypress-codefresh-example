/// <reference types="cypress" />
describe('spec-c', () => {
  it('works', () => {
    cy.wrap('Hello').should('equal', 'Hello')
    cy.wait(5000)
  })
})
