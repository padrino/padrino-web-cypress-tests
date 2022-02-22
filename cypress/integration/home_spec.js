describe('My First Test', () => {
  it('Visit the homepage', () => {
    cy.visit('http://padrinorb.com')

    cy.contains('View on GitHub')
  })

  it('Opens that chat windows', () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Open Chat').click()
  })

  it("Opens link to '/guides'", () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Guides').click()

    cy.url().should('include', '/guides')
  })

  it("Opens link to '/blog'", () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Blog').click()

    cy.url().should('include', '/blog')
  })

  it("Open external API documentation", () => {
    cy.visit('http://padrinorb.com')
    cy.contains('API').should('have.attr', 'href', 'http://www.rubydoc.info/github/padrino/padrino-framework')
  })

  it("Opens link to '/contribute'", () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Contribute').click()

    cy.url().should('include', '/contribute')
  })

  it("Opens link to '/contribute'", () => {
    cy.visit('http://padrinorb.com')
    cy.contains('Contribute').click()

    cy.url().should('include', '/contribute')
  })

})
