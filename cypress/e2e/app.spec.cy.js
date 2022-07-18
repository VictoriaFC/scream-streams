/// <reference types="cypress" />

describe("App Dashboard", () => {
  beforeEach( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should('eq', "http://localhost:3000/")
  })

  afterEach( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

  it("should load header with welcome message with creepy quote below it", () => {
    cy.get(".header-container")
    cy.contains("WELCOME TO SCREAM STREAMS")
    cy.contains("Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man you think you know.")
  })

  it("should have a movies container with movie articles", () => {
    cy.get(".movies-container")
    cy.get(".movie-poster")
      .should("be.visible")
      .get("h3").should("have.class", "movie-title-main")
      .get("p").should("have.class", "movie-rating-main")
  })

  it("should be able to click movie poster and open movie preview page", () => {
    cy.get(".movie-poster-image").first().should("have.attr", "alt", "The Black Phone").click()
    .url().should("include", "/MoviePreview")
  })
})