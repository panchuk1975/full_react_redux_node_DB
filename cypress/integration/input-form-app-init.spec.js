describe("Init app", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Focuses input on load", () => {
    cy.visit("http://localhost:3000");
    cy.focused().should("have.class", "firstName");
  });

  it.only("Accepts input", () => {
    const typedText = "Vadim";
    cy.visit("http://localhost:3000");
    cy.get(".firstName").type(typedText).should("have.value", typedText);
  });

  context("Form submission", () => {
    it.only("Adds a new note on submit", () => {
     cy.server()
     cy.route('POST', 'api/employees', {
        firstName: "Vadim",
        secondName: "",
        status: "Busy",
        text: "",
     })
    });
  });

  it.only('Shows an error message on a failed sbmission', () => {
    cy.server()
    cy.route({
       url: 'api/employees',
       metod: 'POST',
       status: 500,
       response: {}
    })
  })

  it.only('Loads notes on page load', () => {
      cy.server()
      cy.route("GET", "/api/employees", "fixture: employees")
      cy.visit("http://localhost:3000");
      cy.get(".notes-block").should("have.length", 5)
  })
});
