// SHOPPING CART FUNCTIONALITY TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Add item to cart", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Click Add to Cart
  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.wait(500);

  // Check badge appears
  cy.get(".shopping_cart_badge").should("have.text", "1");
  cy.screenshot("Item_Added");
});

it("✅ Remove item from cart", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.wait(500);
  cy.get("#remove-sauce-labs-backpack").click();
  cy.wait(500);

  // Check badge disappears
  cy.get(".shopping_cart_badge").should("not.exist");
  cy.screenshot("Item_Removed");
});
