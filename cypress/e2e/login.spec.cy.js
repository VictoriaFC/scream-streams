/// <reference types="cypress" />

describe("App Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-login-button").click()
		cy.get(".login-form").should("be.visible")
  })

	after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

	it("should be able to login", () => {
		cy.get(".login-email").type("vic@gmail.com")
		cy.get("input").last().type("Vic1")
		cy.get(".login-button").click()
	})

	it("should be able to go back to main", () => {
		cy.get(".back-button-login-page").click()
		cy.url().should("eq", "http://localhost:3000/")
	})
})