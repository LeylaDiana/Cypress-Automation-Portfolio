// ADD MULTIPLE ITEMS TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Add multiple items to cart", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Add Item 1
  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.wait(500);

  // Add Item 2
  cy.get("#add-to-cart-sauce-labs-bike-light").click();
  cy.wait(500);

  // Add Item 3
  cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click();
  cy.wait(500);

  // Verify badge shows 3
  cy.get(".shopping_cart_badge").should("have.text", "3");
  cy.screenshot("Multiple_Items_Added");
});
