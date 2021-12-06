describe('Pool', () => {
  beforeEach(() => cy.visit('/pool'))
  it('add liquidity links to /add/FANTOM', () => {
    cy.get('#join-pool-button').click()
    cy.url().should('contain', '/add/FANTOM')
  })

  it('import pool links to /import', () => {
    cy.get('#import-pool-link').click()
    cy.url().should('contain', '/find')
  })
})
