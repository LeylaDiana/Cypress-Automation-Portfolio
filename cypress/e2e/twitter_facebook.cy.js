// SOCIAL MEDIA LINKS TEST

Cypress.config("defaultCommandTimeout", 2000);

it("✅ Check Social Media Links", () => {
  // Login first
  cy.visit("https://www.saucedemo.com/");
  cy.get("#user-name").type("standard_user", { delay: 100 });
  cy.get("#password").type("secret_sauce", { delay: 100 });
  cy.get("#login-button").click();
  cy.wait(1000);

  // Check Twitter icon
  cy.get(".social_twitter a")
    .should("have.attr", "href")
    .and("include", "twitter.com");
  cy.screenshot("Social_Links");
});
