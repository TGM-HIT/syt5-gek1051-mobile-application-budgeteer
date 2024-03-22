describe('Neue Shoppingliste hinzufügen', () => {
  it('Besucht die Seite und fügt eine neue Liste hinzu', () => {
    cy.visit('http://localhost:8081')
    cy.get('#addlist').click()
    cy.get('#listname').type('Feierabend!')
    cy.get('#placename').type('BILLA')
    cy.get('#addlist-button').click()
  })
})