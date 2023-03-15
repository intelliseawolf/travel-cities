/// <reference types="cypress" />
describe("check city distances", () => {
  it("check sharing with others", () => {
    cy.visit(
      "http://localhost:3000/result?date=01%2F01%2F23&destinationCities=Montpellier&originCity=Paris&passenger=9"
    );
    cy.wait(2000);
  });
});
