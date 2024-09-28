describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  context("hero section", () => {
    it("h1 contains the correct text", () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress"
      )
    })
    it("features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
  context("courses section", () => {
    it("Course:Testing your first js app", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should(
        "contain",
        "testing-your-first-application"
      )
    })
    it("testing foundations", () => {
      cy.getByData("course-1").find("a").contains("Get started").click()
      cy.location("pathname").should("contain", "testing-foundations")
    })
    it("cypress fundamentals", () => {
      cy.getByData("course-2").find("a").contains("Get started").click()
      cy.location("pathname").should("contain", "cypress-fundamentals")
    })
  })
})
