describe('Addition', () => {
  it('should add two numbers correctly', () => {
    cy.log('Test running...');
    const result = 2 + 3;
    expect(result).to.eq(5); // Using Chai's `eq` for equality
  });

  it('should add two numbers correctly again', () => {
    cy.log('Test running...');
    const result = 2 + 3;
    expect(result).to.eq(5); // Using Chai's `eq` for equality
  });
});
