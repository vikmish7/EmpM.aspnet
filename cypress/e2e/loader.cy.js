describe('Employee Table Loader', () => {
  it('should display loader and then show the table', () => {
    cy.visit('/Employee'); // Adjust the route as per your app

    // Loader should be visible initially
    cy.get('#loader').should('be.visible');

    // Loader should disappear and table should be visible after 1.5 seconds
    // cy.wait(1800); // Adjust the wait time to match your loader timeout
    // cy.get('#loader', { timeout: 6000 }).should('have.css', 'display', 'none');


    cy.get('#loader', { timeout: 6000 })
    .should('not.be.visible') // Checks visibility
    .and('have.css', 'display', 'none'); // Checks display property

    // cy.get('#loader').should('not.exist');
    cy.get('#employeeTable').should('be.visible');
  });


});

describe('Edit Button Functionality', () => {
  it('should toggle view and edit modes when Edit is clicked', () => {
    cy.visit('/Employee');

  

    // Click the Edit button on the first row
    cy.get('#employeeTable tbody tr').first().within(() => {
      cy.get('.edit-btn').click();

      // Verify view-mode is hidden and edit-mode is visible
      cy.get('.view-mode').should('not.be.visible');
      cy.get('.edit-mode').should('be.visible');

      // Verify Save button is visible
      cy.get('.save-btn').should('be.visible');
    });
  });
});

describe('Save Employee Data', () => {
  it('should update employee details successfully', () => {
    cy.visit('/Employee'); // Replace with your app's route

    // Interact with the form to edit employee details
    cy.get('.edit-btn').first().click();

    // Use the 'input' selectors by the 'class' or 'type' to interact with the fields
    cy.get('input.edit-mode').eq(0).clear().type('Updated Name'); // Employee Name
    cy.get('input.edit-mode').eq(1).clear().type('Updated Designation'); // Designation

    // Set up intercept for the POST request before clicking the save button
    cy.intercept({
      method: 'POST',
      url: '/Employee/Edit',
      headers: {
        'Content-Type': 'application/json'
      }
    }).as('editEmployee');

    // Click save
    cy.get('.save-btn').first().click();

    // Wait for the intercepted request
    cy.wait('@editEmployee').then(({ response }) => {
      console.log('Response:', response); // Debug the response

      // Check if the response is successful
      expect(response.statusCode).to.eq(200); // Ensure the server responded with 200
      // expect(response.body).to.have.property('status', 'success'); // Check the response body
    });

    // Assert the page reloads or changes based on the save action
    cy.get('.view-mode').eq(0).should('contain', 'Updated Name');
    cy.get('.view-mode').eq(1).should('contain', 'Updated Designation');
  });
});

describe('Save Button Error Handling', () => {
  it('should display an error message on failed save', () => {
    cy.visit('/Employee');

    // Wait for the table to load

    // Intercept the AJAX call to simulate a failure
    cy.intercept('POST', '/Employee/Edit', { statusCode: 500 }).as('saveEmployee');

    // Click the Edit button
    cy.get('#employeeTable tbody tr').first().within(() => {
      cy.get('.edit-btn').click();

      // Update the employee name
      cy.get('input').first().clear().type('Updated Name');
    });

    // Click the Save button after setting up the intercept
    cy.get('#employeeTable tbody tr').first().within(() => {
      cy.get('.save-btn').click();
    });

    // Verify that the AJAX request was made
    cy.wait('@saveEmployee');

    // Verify error alert is shown
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Error updating employee details.');
    });
  });
});
