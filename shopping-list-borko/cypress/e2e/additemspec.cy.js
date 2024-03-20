describe('Items einer Liste hinzufuegen', () => {
  it('besucht die Seite, gibt einem Item einen Namen und ueberprueft ob dieses nach Button Klick hinzugefuegt wurde', () => {
    cy.visit('http://localhost:8081/');
    cy.get('#listitems').click()
    cy.get('#itemtitle').type('Eier');
    cy.get('#itemadd').click();
    cy.get('#iteminlist').should('be.visible');
  })
  it('besucht die Seite, gibt dem Item KEINEN Namen, das Item sollte nicht hinzugefuegt werden können', () => {
    cy.visit('http://localhost:8081/');
    cy.get('#listitems').click()
    cy.get('#itemadd').should('be.disabled');
  })
  it('besucht die Seite, gibt einem Item einen Namen, ueberprueft ob dieses nach Button Klick hinzugefuegt wurde und ueberpruefr ob dieses nach seiten reload noch da ist', () => {
    cy.visit('http://localhost:8081/');
    cy.get('#listitems').click()
    cy.get('#itemtitle').type('Eier');
    cy.get('#itemadd').click();
    cy.get('#iteminlist').should('be.visible');
    cy.reload();
    cy.get('#listitems').click()
    cy.get('#iteminlist').should('be.visible');
  })
})