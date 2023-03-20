const chai = require('chai');
const expect = chai.expect;
const { multiply, random, mod, max } = require('../index');

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(multiply(num1, num2)).to.eq(62);
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      expect(random()).to.be.a('number');
      expect(random()).to.be.within(1, 10);
    });
  });
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      expect(mod(num3, num4)).to.eq(4);
    });
  });
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max(numbers)).to.eq(20);
    });
  });
});