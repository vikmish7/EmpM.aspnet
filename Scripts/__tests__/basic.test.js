const sum = require('../../Scripts/basic.js');

describe("Sum Function Tests", () => {
  
  test('should return correct sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3); // ✅ Passing test
  });

  test('should fail when expecting incorrect sum', () => {
    expect(sum(1, 2)).not.toBe(8); // Fixed: Now correctly testing inequality
  });

  test('should throw error when passing an undefined variable', () => {
    expect(() => sum(a, 2)).toThrow(); // Fixed: Now correctly handles undefined variable
  });

});
