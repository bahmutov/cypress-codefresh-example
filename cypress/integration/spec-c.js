/// <reference types="cypress" />
describe('spec-c', () => {
  it('works', () => {
    cy.wrap('Hello').invoke('reverse').should('equal', 'olleH')
    cy.wait(5000)
  })
})
