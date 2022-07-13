/// <reference types="cypress" />

describe('MoviePreview Page', () => {
  beforeEach( () => {
    cy.visit('http://localhost:3000/MoviePreview/960258')
  })

  it("should display movie poster with data", () => {
    cy.get(".display-left").get(".movie-image").should("be.visible").should("have.attr", "src")
    cy.get(".preview-container").should("be.visible").should("have.attr", "style").and("include", "background-image: url(")
    cy.get("h2").contains("Shark Bait")
    .get("p").contains("87 runtime")
    .get("p").contains("Horror")
    .get("p").contains("Average: 6.8")
    .get("h4").contains("Terror runs deep.")
    .get("p").contains("Overview: A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.")
  })

  it("should navigate back to the homepage when back to main button is clicked", () => {
    cy.get(".back-button").click()
    .url().should("eq", "http://localhost:3000/")
  })
})