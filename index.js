const num1 = 2;
const num2 = 31;
const num3 = 10;
const num4 = 6;
const numbers = [5, 10, 15, 20, 8];

function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Random function
  function random() {
    return Math.ceil(Math.random() * 10);
  }
  
  // Mod function
  function mod(num1, num2) {
    return num1 % num2;
  }
  
  // Max function
  function max(numbers) {
    let highest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
    return highest;
  }
  
  module.exports = { multiply, random, mod, max };