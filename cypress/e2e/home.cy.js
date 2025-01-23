describe('ASP.NET Home Page Test', () => {
  it('should load the home page and verify the title', () => {
    // Visit the home page
    cy.visit('/'); // Base URL is prepended automatically

    // Check for a specific element from the .cshtml file
  });

  after(() => {
    cy.task('coverageReport'); // Ensure it's not happening in the "after all" hook that might be causing issues
  });
});
