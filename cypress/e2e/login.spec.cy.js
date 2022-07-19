/// <reference types="cypress" />

describe("Login Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.wait(2000)
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-login-button").click()
		cy.url().should("eq", "http://localhost:3000/Login")
		cy.get(".login-form").should("be.visible")
    cy.wait(2000)
  })

	after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

	it("should be able to login", () => {
		cy.get("input").first().type("vic@gmail.com")
		cy.get("input").last().type("Vic1")
		cy.get(".login-button").click()
	})

	it("should be able to go back to main", () => {
		cy.get(".back-button-login-page").click()
		cy.url().should("eq", "http://localhost:3000/")
	})
})

describe("Sad path-Login Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.wait(2000)
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-login-button").click()
		cy.url().should("eq", "http://localhost:3000/Login")
		cy.get(".login-form").should("be.visible")
    cy.wait(2000)
  })

  after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

  it("should display an alert if login info is incorrect", () => {
    cy.get("input").first().type("Chloe123@gmail.com")
    cy.get("input").last().type("Hello")
    cy.get(".login-button").click()
    cy.wait(2000)
    cy.on("window:alert", (string) => {
      expect(string).to.equal("Something went wrong")
    })
  })
})