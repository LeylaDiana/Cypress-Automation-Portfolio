// NAVIGATION MENU TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Open Menu and Logout", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Click Menu
  cy.get("#react-burger-menu-btn").click();
  cy.wait(1000);

  // Click Logout
  cy.get("#logout_sidebar_link").click();
  cy.wait(1000);

  // Verify back to login page (FIXED LINE)
  cy.url().should("eq", "https://www.saucedemo.com/");

  // Also verify login button is visible
  cy.get("#login-button").should("be.visible");

  cy.screenshot("Logout_Success");
});
