describe("Basic jQuery Unit Test", () => {
    beforeEach(() => {
        // Load HTML into Cypress by reading the index.html file
        cy.readFile('Scripts/index.html').then((htmlContent) => {
            cy.document().then((doc) => {
                doc.body.innerHTML = htmlContent;
  
                // Load jQuery dynamically
                return new Cypress.Promise((resolve) => {
                    const script = doc.createElement("script");
                    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
                    script.onload = () => resolve();
                    doc.head.appendChild(script);
                });
            });
        });
  
        // Inject the basjquery.js script
        cy.readFile("Scripts/basjquery.js").then((jsCode) => {
          cy.document().then((doc) => {
              const script = doc.createElement("script");
              script.innerHTML = jsCode; // Inject the JavaScript code
              doc.head.appendChild(script);
          });
        });
    });
  
    it("should change text on button click", () => {
        cy.get("#displayText").should("have.text", "Original Text");
        cy.get("#changeTextBtn").click();
        cy.get("#displayText").should("have.text", "Text changed!");
    });
  });
  