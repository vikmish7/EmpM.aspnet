// sum.test.js
const sum = require('../../Scripts/basic.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
