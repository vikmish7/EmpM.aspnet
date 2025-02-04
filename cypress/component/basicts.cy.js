// cypress/component/sum.spec.js

import sum from '../../Scripts/compiled/basic'; // Adjust path based on your setup

describe('Sum Function', () => {
  it('should return 5 when adding 2 and 3', () => {
    const result = sum(2, 3);
    expect(result).to.equal(5);
  });

  it('should return -1 when adding -3 and 2', () => {
    const result = sum(-3, 2);
    expect(result).to.equal(-1);
  });

  it('should return 0 when adding 0 and 0', () => {
    const result = sum(0, 0);
    expect(result).to.equal(0);
  });
});
