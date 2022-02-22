describe('My First Test', () => {
  it('Visit the homepage', () => {
    cy.visit('http://padrinorb.com')

    cy.contains('View on GitHub')
    cy.contains('Open Chat')
  })
})
