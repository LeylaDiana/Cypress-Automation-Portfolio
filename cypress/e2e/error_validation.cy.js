// FORM VALIDATION TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Check empty first name error", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Go to cart and checkout
  cy.get(".shopping_cart_link").click();
  cy.wait(500);
  cy.get("#checkout").click();
  cy.wait(500);

  // Leave First Name empty, type only Last Name
  cy.get("#last-name").type("Testing", { delay: 100 });
  cy.get("#postal-code").type("43000", { delay: 100 });
  cy.wait(500);

  // Click Continue
  cy.get("#continue").click();
  cy.wait(1000);

  // Check error message appears
  cy.get('[data-test="error"]').should("be.visible");
  cy.get('[data-test="error"]').should("contain", "First Name is required");

  cy.screenshot("Validation_Error_First_Name");
});
