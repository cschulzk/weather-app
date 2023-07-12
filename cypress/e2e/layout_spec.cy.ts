describe('Layout', () => {
  it('Successfully loads', () => {
    cy.visit('/')
  })
  it('Has header', () => {
    cy.visit('/')
    cy.get('header')
  })
  it('Has footer', () => {
    cy.visit('/')
    cy.get('footer')
  })
  it('Correct title', () => {
    cy.visit('/')
    cy.get('header h1').contains('Weather App')
  })
  it('Has unit preference selector', () => {
    cy.visit('/')
    cy.get('footer fieldset').get('legend').contains('Units')
  })
  it('Has search bar', () => {
    cy.visit('/')
    cy.get('input[id*="search-bar"]')
  })
})