// CART BADGE UPDATE TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Cart badge updates correctly", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Add item
  cy.get("#add-to-cart-sauce-labs-fleece-jacket").click();
  cy.wait(500);
  cy.get(".shopping_cart_badge").should("have.text", "1");

  // Remove item
  cy.get("#remove-sauce-labs-fleece-jacket").click();
  cy.wait(500);

  // Verify badge gone
  cy.get(".shopping_cart_badge").should("not.exist");
  cy.screenshot("Cart_Badge_Test");
});
