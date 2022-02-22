describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('http://padrinorb.com')
  })

  it('Visit the homepage', () => {

    cy.contains('View on GitHub')
  })

  it('Opens that chat windows', () => {
    cy.contains('Open Chat').click()
  })

  it("Opens link to '/guides'", () => {
    cy.contains('Guides').click()

    cy.url().should('include', '/guides')
  })

  it("Opens link to '/blog'", () => {
    cy.contains('Blog').click()

    cy.url().should('include', '/blog')
  })

  it("Has link to external API documentation", () => {
    cy.contains('API').should('have.attr', 'href', 'http://www.rubydoc.info/github/padrino/padrino-framework')
  })

  it("Opens link to '/contribute'", () => {
    cy.contains('Contribute').click()

    cy.url().should('include', '/contribute')
  })

  it("Opens link to '/contribute'", () => {
    cy.contains('Contribute').click()

    cy.url().should('include', '/contribute')
  })

  it("Has link to GitHub project URL", () => {
    cy.contains('GitHub').should('have.attr', 'href', 'https://github.com/padrino/padrino-framework')
  })
})
