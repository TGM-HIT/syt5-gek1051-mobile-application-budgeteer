describe('Shoppingliste löschen', () => {
    it('Besucht die Seite und löscht eine Liste', () => {
      cy.visit('http://localhost:8081')
      cy.get('#listsettings').click()
      cy.get('#listdelete').click()
    })
  })