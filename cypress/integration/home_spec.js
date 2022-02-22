describe('My First Test', () => {
  it('Visit the homepage', () => {
    cy.visit('http://padrinorb.com')

    cy.contains('View on GitHub')
  })

  it('Opens that chat windows', () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Open Chat').click()
  })
})
