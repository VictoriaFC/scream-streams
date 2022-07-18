/// <reference types="cypress" />

describe("Movie Preview Dashboard Logged Out", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should('eq', "http://localhost:3000/")
		cy.get(".movie-poster-image").eq(1).click()
  })

  after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

  it("should display movie poster with data", () => {
    cy.get(".display-left").get(".movie-image").should("be.visible").should("have.attr", "src")
    cy.get(".preview-container").should("be.visible").should("have.attr", "style").and("include", "background-image: url(")
    cy.get("h2").contains("Shark Bait")
    .get("p").contains("Runtime: ")
    .get("p").contains("Horror")
    .get("p").contains("Average: ")
    .get("h4").contains("Terror runs deep.")
		// .get(".overview-header").should("contain", "Overview: ")
		.get("p").contains("A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.")
  })

  it("should get error message when white heart is clicked", () => {
    cy.get(".not-fav-img").click()
		cy.get(".not-signed-in-error").should("be.visible")
  })

  it("should navigate back to the homepage when back to main button is clicked", () => {
    cy.get(".back-button").click()
    .url().should("eq", "http://localhost:3000/")
  })
})

/// <reference types="cypress" />

describe("Movie Preview Dashboard Logged In", () => {
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
		cy.wait(2000)
		// cy.url().should('eq', "http://localhost:3000/")
  })

	after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

	it("should be able to click on a movie poster", () => {
		cy.get(".movie-poster-image").eq(1).click()
	})

	it("should be able to click the add to watch list heart", () => {
		cy.get(".not-fav-img").click()
		cy.get(".fav-img").should("be.visible")
	})
	
})