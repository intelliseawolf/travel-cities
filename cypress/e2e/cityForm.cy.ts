/// <reference types="cypress" />
describe("test city form", () => {
  it("Origin city validation", () => {
    cy.visit("http://localhost:3000/");
    cy.get('button[type="submit"]').should("have.attr", "disabled", "disabled");
    cy.get("input#originCity").focus().blur();
    cy.contains("You must choose the city of origin");
    cy.get("input#originCity").type("p");
    cy.wait(2000);
    cy.get('[data-cy="citySearchResult"]').contains("Paris").click();
    cy.contains("You must choose the city of origin").should("not.exist");
  });

  it("Destination city validation", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="addDestination"]').click();
    cy.get("input#destinationCity0").focus().blur();
    cy.contains("You must choose the city of destination");
    cy.get("input#destinationCity0").type("p");
    cy.wait(2000);
    cy.get('[data-cy="citySearchResult"]').contains("Paris").click();
    cy.contains("You must choose the city of destination").should("not.exist");
  });

  it("Passenger validation", () => {
    cy.visit("http://localhost:3000/");
    for (let i = 0; i < 10; i++) {
      cy.get('[data-cy="minusPassenger"]').click();
    }
    cy.contains("Select passengers");
  });

  it("check sharing with others", () => {
    cy.visit(
      "http://localhost:3000/?date=01%2F01%2F23&destinationCities=Montpellier&originCity=Paris&passenger=9"
    );
    cy.get("input#originCity").should("have.value", "Paris");
    cy.get("input#destinationCity0").should("have.value", "Montpellier");
    cy.get('[data-cy="passengerInput"]').contains("9");
  });

  it("result error message when search the city with fail keyword", () => {
    cy.visit("http://localhost:3000");
    cy.get("input#originCity").type("fail");
    cy.contains("Failed in searching city");
  });
});
