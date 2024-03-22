describe('Check if Data is stored in PouchDB', () => {
  it('passes', () => {
    cy.visit('https://genuine-bublanina-389900.netlify.app/')

    cy.get('#settings').click()
    cy.get('#syncUrl').type('https://apikey-v2-okuw20xktbmma1y05378zrc9eds44zp3rvrp3sxxckt:87b9177c31a91731a0e61f27fb3bf05b@746c698f-7d60-46e7-962a-d9efdd7c9a7d-bluemix.cloudantnosqldb.appdomain.cloud/shopping-list')
    cy.get('#syncButton').click()
    cy.get('#returnButton').click()

    cy.get('#itemlist').should('be.visible')
  })
})