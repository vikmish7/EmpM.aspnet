describe('Employee List Page', () => {
    before(() => {
        // Mock the API response to return employee data
        cy.intercept('GET', '/api/employees', {
            statusCode: 200,
            body: [
                {
                    "EmployeeId": 1,
                    "EmployeeName": "John Doe",
                    "Designation": "Manager",
                    "NID": "123456789",
                    "JoiningDate": "2020-01-01",
                    "Code": "E001",
                    "DepartmentName": "HR",
                    "BloodGroup": "A+"
                },
                {
                    "EmployeeId": 2,
                    "EmployeeName": "Jane Smith",
                    "Designation": "Developer",
                    "NID": "987654321",
                    "JoiningDate": "2021-06-15",
                    "Code": "E002",
                    "DepartmentName": "IT",
                    "BloodGroup": "B+"
                }
            ]
        }).as('getEmployees'); // Alias the API call
    });
    beforeEach(() => {
        // Load the CSHTML file as static HTML (without the server-side processing)
        cy.readFile('Views/Employee/index.cshtml').then((cshtmlContent) => {
            cy.document().then((doc) => {
                doc.body.innerHTML = cshtmlContent;

                // Dynamically load jQuery and Kendo UI script
                return new Cypress.Promise((resolve) => {
                    const script = doc.createElement("script");
                    script.src = "https://code.jquery.com/jquery-3.4.1.min.js";
                    script.onload = () => resolve();
                    doc.head.appendChild(script);
                });
            });
        });
    });

    it('should load emp.js script', () => {
        cy.window().then((win) => {
            console.log(win.document.scripts); // Inspect the loaded scripts
        });
    });
});
