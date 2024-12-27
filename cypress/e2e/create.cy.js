describe('Create Employee Form', () => {
  it('should load the form fields correctly', () => {
    cy.visit('/Employee/Create'); // Replace with the actual route
    
    // Check if all fields are present
    cy.get('input[name="EmployeeName"]').should('exist');
    cy.get('input[name="Designation"]').should('exist');
    cy.get('input[name="NID"]').should('exist');
    cy.get('input[name="JoiningDate"]').should('exist');
    cy.get('select[name="DepartmentId"]').should('exist');
    cy.get('select[name="BloodGroup"]').should('exist');
    cy.get('input[type="submit"]').should('exist');
  });


  it('should allow submission when all fields are valid', () => {
    cy.visit('/Employee/Create');

    // Fill out the form with valid data
    cy.get('input[name="EmployeeName"]').type('John Doe');
    cy.get('input[name="Designation"]').type('Manager');
    cy.get('input[name="NID"]').type('123456789');
    cy.get('input[name="JoiningDate"]').type('2023-01-01');
    cy.get('select[name="DepartmentId"]').select('1'); // Adjust the value as per options
    cy.get('select[name="BloodGroup"]').select('A+');

    // Submit the form
    cy.get('input[type="submit"]').click();

    // Verify redirection to the index page (assuming it's triggered on success)
    cy.url().should('include', '/Employee');
    cy.get('#employeeTable tbody tr').last().within(() => {
      cy.get('td').eq(1).should('contain', 'John Doe'); // Validate the new employee name in the table
      cy.get('td').eq(2).should('contain', 'Manager'); // Validate the designation
    });
  });
});


// describe('Employee Creation Form - Backend Response', () => {
//   beforeEach(() => {
//     cy.intercept('POST', '/Employee/Create', (req) => {
//       req.reply({
//         statusCode: 200,
//         body: 'SuccessFull',
//       });
//     }).as('createEmployee');
//   });

//   it('should handle successful form submission', () => {
//     cy.visit('/Employee/Create');

//     // Fill out the form
//     cy.get('input[name="EmployeeName"]').type('John Doe');
//     cy.get('input[name="Designation"]').type('Manager');
//     cy.get('input[name="NID"]').type('123456789');
//     cy.get('input[name="JoiningDate"]').type('2023-01-01');
//     cy.get('select[name="DepartmentId"]').select('1');
//     cy.get('select[name="BloodGroup"]').select('A+');

//     // Submit the form
//     cy.get('input[type="submit"]').click();

//     // Wait for intercept to verify request is sent
//     cy.wait('@createEmployee').then(({ request }) => {
//       console.log('Response:', request); // Debug the response

//       // expect(request.body).to.include('John Doe'); // Check form data
//     });

//     // Verify redirection or success message
//     cy.url().should('include', '/Employee');
//   });

//   // it('should display error message on backend failure', () => {
//   //   // Mock a failed response
//   //   cy.intercept('POST', '/Employee/Create', {
//   //     statusCode: 500,
//   //     body: 'Failed',
//   //   }).as('createEmployeeError');

//   //   cy.visit('/Employee/Create');

//   //   // Fill out the form with valid data
//   //   cy.get('input[name="EmployeeName"]').type('Jane Doe');
//   //   cy.get('input[name="Designation"]').type('Developer');
//   //   cy.get('input[name="NID"]').type('987654321');
//   //   cy.get('input[name="JoiningDate"]').type('2022-06-01');
//   //   cy.get('select[name="DepartmentId"]').select('2');
//   //   cy.get('select[name="BloodGroup"]').select('B+');

//   //   // Submit the form
//   //   cy.get('input[type="submit"]').click();

//   //   // Wait for intercept
//   //   cy.wait('@createEmployeeError');

//   //   // Verify error message display
//   //   cy.contains('Employee inserted ERROR').should('be.visible');
//   // });
// });
