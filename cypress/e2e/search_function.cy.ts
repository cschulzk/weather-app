describe('Search Bar', () => {
  it('Successfully loads', () => {
    cy.visit('/')
    cy.get('input[id*="search-bar"]')
    cy.get('main > form > label').contains('Search')
    cy.get('main > form > ul')
  })
  it('Returns autocomplete values', () => {
    cy.visit('/')
    cy.intercept('/api/getLocations**').as('getLocations')
    cy.get('input[id*="search-bar"]').type('par')
    cy.wait('@getLocations')
    cy.get('main > form > ul').contains('Paris')
  })
})