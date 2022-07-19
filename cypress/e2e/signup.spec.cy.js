/// <reference types="cypress" />

describe("Sign Up Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-signup-button").click()
		cy.url().should("eq", "http://localhost:3000/SignUp")
		cy.get(".signup-form").should("be.visible")
  })

	after( () => {
    cy.visit("http://localhost:3000/")
    window.sessionStorage.removeItem("isOfAge")
  })

	it("should be able to fill out the name, email, and password and click the 'Create Account' button", () => {
		cy.intercept("POST", "http://localhost:3000/SignUp", 
		{
			statusCode: 201,
			body: {
				name: "Bob",
				email: "bob@gmail.com",
				password: "Bob1"
			}
		})
		cy.get(".signup-name").type("Bob")
		cy.get(".signup-email").type("bob@gmail.com")
		cy.get(".signup-password").type("Bob1")
		cy.get(".create-account-button").click()
		cy.url().should("include", "/")
	})

	it("should be able to go back to main", () => {
		cy.get(".back-button-signup-page").click()
		cy.url().should("eq", "http://localhost:3000/")
	})

})

describe("Sad path-Sign Up Dashboard", () => {
  before( () => {
    cy.visit("http://localhost:3000/")
    cy.get(".consent-checkbox").click()
    cy.get(".consent-button").click()
    cy.url().should("eq", "http://localhost:3000/")
		cy.get(".nav-signup-button").click()
		cy.url().should("eq", "http://localhost:3000/SignUp")
		cy.get(".signup-form").should("be.visible")
  })

  it("should display error message if input left blank", () => {
		cy.get(".signup-email").type("bob@gmail.com")
		cy.get(".signup-password").type("Bob1")
		cy.get(".create-account-button").click()
		cy.on("window:alert", (string) => {
      expect(string).to.equal("Please fill out this field")
    })
  })
})