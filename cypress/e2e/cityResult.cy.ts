/// <reference types="cypress" />
describe("check city distances", () => {
  it("check sharing with others", () => {
    cy.visit(
      "http://localhost:3000/result?date=01%2F01%2F23&destinationCities=Montpellier&originCity=Paris&passenger=9"
    );
    cy.wait(2000);
    cy.get('[data-cy="originCityName"]').contains("Paris");
    cy.get('[data-cy="destinationCityName0"]').contains("Montpellier");
    cy.get('[data-cy="passengerCount"]').contains("9");
    cy.get('[data-cy="date"]').contains("Jan 1, 2023");
  });

  it("result error when the cities contain Dijon city", () => {
    cy.visit(
      "http://localhost:3000/result?date=01%2F01%2F23&destinationCities=Dijon&originCity=Paris&passenger=9"
    );
    cy.contains("Oops! Something went wrong!");
  });
});
