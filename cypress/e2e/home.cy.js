describe('ASP.NET Home Page Test', () => {
  it('should load the home page and verify the title', () => {
    // Visit the home page
    cy.visit('/'); // Base URL is prepended automatically

    // Check the title of the page
    cy.title().should('contain', 'Home'); // Adjust this based on your actual title

    // Check for a specific element from the .cshtml file
  });


});
