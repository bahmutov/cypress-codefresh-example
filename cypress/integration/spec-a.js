/// <reference types="cypress" />
describe('spec-a', () => {
  it('works', () => {
    cy.wrap('Hello').should('equal', 'Hello')
    cy.wait(5000)
  })
})
