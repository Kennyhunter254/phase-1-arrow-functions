// Define the divide function as a function expression
const divide = function(a, b) {
    return a / b;
  }
  
  
  
  // Define the add function as an arrow function
  const add = (a, b) => a + b;

  // Define the square function as an arrow function
  const square = x => x * x;
  
  // Exporting the functions for testing
  module.exports = {
    divide,
    square,
    
    add
  };
  