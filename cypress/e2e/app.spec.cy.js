
describe("App Dashboard", () => {
  
  beforeEach( () => {
    cy.visit("http://localhost:3000")
  })

  it("should have a favorites button", () => {
    cy.get(".favorite-button")
    .contains("Favorites")
  })

  it("should load header with welcome message with creepy quote below it", () => {
    cy.contains("WELCOME TO SCREAM STREAMS")
    cy.contains("Walls have ears. Doors have eyes. Trees have voices. Beasts tell lies. Beware the rain. Beware the snow. Beware the man you think you know.")
    cy.get(".header-container")
  })

  it("should have a movies container with movie articles", () => {
    cy.get(".movies-container")
    cy.get(".movie-poster")
      .should("be.visible")
      .get("h3").should("have.class", "movie-title")
      .get("p").should("have.class", "movie-rating")
  })

})