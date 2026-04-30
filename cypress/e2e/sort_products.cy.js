// SORTING PRODUCTS TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Sort products by Price (Low to High)", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Select dropdown
  cy.get(".product_sort_container").select("lohi");
  cy.wait(1000);

  // Verify first item is the cheapest
  cy.get(".inventory_item_price").first().should("contain", "$7.99");
  cy.screenshot("Sort_Price_Low_High");
});
