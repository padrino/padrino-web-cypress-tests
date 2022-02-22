describe('Blog tests', () => {
  beforeEach(() => {
    cy.visit('http://padrinorb.com/blog/')
  })

  it("Has 'Latest Posts'", () => {
    cy.contains('Latest Posts')
    cy.get('.sidebar').find('li').should('have.length', 7)
  })

  it("Has 'Next Page' link", () => {
    cy.contains('Next Page').should('have.attr', 'href')
    cy.contains('Next Page').click()
  })

  it("Click 'Next Page' link", () => {
    cy.contains('Next Page').click()
    cy.url().should('include', '/blog/page/2')
    cy.contains('Prev Page')
    cy.contains('Next Page')
  })

  it("Has tags", () => {
    cy.get('.article__metadata').first().find('a').should('have.length', 2)
  })

})
