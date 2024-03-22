describe('Check if Data is stored in PouchDB', () => {
  it('passes', () => {
    cy.visit('https://genuine-bublanina-389900.netlify.app/')

    // Annahme: Nach dem Laden der Seite wird die Liste der gespeicherten Elemente angezeigt

    cy.get('#itemlist').should('be.visible')
  })
})