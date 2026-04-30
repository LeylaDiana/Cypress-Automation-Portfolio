// LOGIN FUNCTIONALITY TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Login successfully", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();

  cy.wait(1000);

  cy.url().should("include", "inventory.html");
  cy.get(".title").should("have.text", "Products");
  cy.screenshot("Login_Success");
});

it("❌ Login fail - wrong password", () => {
  cy.visit("https://www.saucedemo.com/");

  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("wrong_pass", { delay: 100 });
  cy.get("#login-button").click();

  cy.wait(1000);

  cy.get('[data-test="error"]').should("be.visible");
  cy.screenshot("Login_Fail");
});
