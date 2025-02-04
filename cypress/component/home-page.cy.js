describe("Home Page Unit Test with CSHTML", () => {
    beforeEach(() => {
      // Read the home.cshtml content dynamically
      cy.readFile('Views/Home/index.cshtml').then((cshtmlContent) => {
        cy.document().then((doc) => {
          // Inject the read content into the document body
          const htmlWithMockedValues = cshtmlContent
          .replace('@{ ViewBag.Title = "Home Page"; }', '<title>Home Page</title>')
          .replace('@Url.Action("Create", "Employee")', '/Employee/Create')
          .replace('@Url.Action("Index", "Employee")', '/Employee/Index')
          .replace('@Url.Action("KendoUI", "Employee")', '/Employee/KendoUI');

        // Inject the modified HTML content into the document body
        doc.body.innerHTML = htmlWithMockedValues;  
          // Optionally, you can load jQuery dynamically if needed
          return new Cypress.Promise((resolve) => {
            const script = doc.createElement("script");
            script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
            script.onload = () => resolve();
            doc.head.appendChild(script);
          });
        });
      });
    });
  
    it("should render the homepage content correctly", () => {
        // Check that the title is rendered correctly
        // cy.title().should("eq", "Home Page");
    
        // Check that the heading contains the correct text
        cy.get(".jumbotron h2").should("have.text", "ASP.NET Employee Mgmt Project");

    // Check that the paragraph contains expected text
    cy.get("p").should("contain.text", "Project demostrating basic CRUD functionality");

    // Check that the 'Create' link is rendered correctly
    cy.get('a[href="/Employee/Create"]').should("exist").and("contain.text", "Create -->");

    // Check that the 'List' link is rendered correctly
    cy.get('a[href="/Employee/Index"]').should("exist").and("contain.text", "List -->");

    // Check that the 'Kendo UI Table' link is rendered correctly
    cy.get('a[href="/Employee/KendoUI"]').should("exist").and("contain.text", "Kendo UI Table -->");

    // Check headings
    cy.get("h4").contains("Start by creating employees data");
    cy.get("h4").contains("List of Employee data");
    cy.get("h4").contains("Kendo UI table with employees data");

    // Ensure that empty space div is there for layout (optional check)
    cy.get("div[style='height:100px']").should("exist");
      });
  });
  