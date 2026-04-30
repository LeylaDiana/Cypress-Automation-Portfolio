// PRODUCT DETAILS TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ View Product Details", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Click on product name
  cy.get(".inventory_item_name").contains("Sauce Labs Backpack").click();
  cy.wait(1000);

  // Verify details page
  cy.get(".inventory_details_name").should("be.visible");
  cy.get(".btn_primary").should("have.text", "Add to cart");
  cy.screenshot("Product_Details");
});
