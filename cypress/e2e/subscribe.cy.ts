describe("newsletter subscription", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("allow users to subscribe to e-mail", () => {
    cy.getByData("email-input").type("mh@mail.com")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("mh@mail.com")
  })

  it("does NOT allow invalid email adress", () => {
    cy.getByData("email-input").type("mh")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })

  it.only("email already in DB", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click()
    cy.getByData("server-error-message")
      .should("exist")
      .contains("john@example.com")
  })
})
