/// <reference types="cypress" />

describe("Watch List Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-login-button").click()
		cy.url().should("eq", "http://localhost:3000/Login")
		cy.get(".login-form").should("be.visible")
		cy.get(".login-email").type("vic@gmail.com")
		cy.get(".login-password").type("Vic1")
		cy.get(".login-button").click()
		cy.url().should("eq", "http://localhost:3000/")
		cy.wait(4000)
  })

	after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

	it("should be able to click watch list button in nav bar", () => {
		cy.get(".nav-watchlist-button").click()
		cy.url().should("eq", "http://localhost:3000/Favorites")
	})

	it("should be able to click movie poster and open movie preview page", () => {
    cy.get(".movie-poster-image").first().should("have.attr", "alt", "The Black Phone").click()
    .url().should("include", "/MoviePreview")
  })
})