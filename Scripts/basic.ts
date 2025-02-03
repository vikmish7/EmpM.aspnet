// src/sum.js

interface SumFunction {
  (a: number, b: number): number;
}

const sum: SumFunction = function (a: number, b: number): number {
  return a + b;
};
module.exports = sum;
