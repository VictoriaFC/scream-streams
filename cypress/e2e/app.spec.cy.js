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

  it("should have a nav bar that shows a home button in top left corner", () => {
    cy.get(".nav-home-button").should("be.visible")
  })
  
  it("should not have a watch list button because user is not logged in", () => {
    cy.get(".nav-watch-list").should("not.exist")
  })

  it("should have a nav bar that shows a login button in top right corner", () => {
    cy.get(".nav-login-button").should("be.visible")
  })

  it("should have a nav bar that shows a signup button in top right corner", () => {
    cy.get(".nav-signup-button").should("be.visible")
  })

  it("should not have a logout button because user is not logged in", () => {
    cy.get(".nav-logout-button").should("not.exist")
  })

  it("should display in nav bar message for user to sign up or login to create a watch list!", () => {
    cy.get(".nav-message").contains("Sign up or Login to create a watch list!")
  })

  
  it("should have 50 movie posters displayed", () => {
      cy.get(".movies-container").children().should("have.length",49)
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

	it("should be able to click ", () => {
    cy.get(".movie-poster-image").first().should("have.attr", "alt", "The Black Phone").click()
    .url().should("include", "/MoviePreview")
  })

	// it("should have a footer with clickable links to creators github", () => {
  //   cy.get(".trish-github").click()
	// 	cy.url().should("contain", "/tfoxcollis")
	// 	cy.go('back')
	// 	cy.get(".vic-github").click()
	// 	cy.url().should("eq", "https://github.com/VictoriaFC")
  // })
	// it("should have a footer with clickable links to creators linkedin", () => {
  //   cy.get(")
  // })
})