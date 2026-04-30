// FOOTER TEXT TEST

Cypress.config('defaultCommandTimeout', 2000)

it('✅ Verify Footer Text and Year', () => {
  
  // Login first
  cy.visit('https://www.saucedemo.com/')
  cy.get('#user-name').type('standard_user', {delay: 100})
  cy.get('#password').type('secret_sauce', {delay: 100})
  cy.get('#login-button').click()
  cy.wait(1000)

  // Check Footer
  cy.get('.footer_copy').should('be.visible')
  cy.get('.footer_copy').should('contain', 'Sauce Labs. All Rights Reserved.')
  
  cy.screenshot('Footer_Check')
})