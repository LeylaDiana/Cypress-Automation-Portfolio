// CHECKOUT PROCESS TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Complete purchase successfully", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Add item to cart
  cy.get("#add-to-cart-sauce-labs-backpack").click();
  cy.wait(500);
  cy.get(".shopping_cart_link").click();
  cy.wait(500);
  cy.get("#checkout").click();
  cy.wait(500);

  // Enter personal info
  cy.get("#first-name").type("Leyla", { delay: 100 });
  cy.get("#last-name").type("Diana", { delay: 100 });
  cy.get("#postal-code").type("43000", { delay: 100 });
  cy.wait(500);
  cy.get("#continue").click();
  cy.wait(1000);

  // Finish order
  cy.get("#finish").click();
  cy.wait(1000);

  // Verify success message
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
  cy.screenshot("Order_Success");
});
