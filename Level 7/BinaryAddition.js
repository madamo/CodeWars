/*
    Description:

    Implement a function that adds two numbers together and returns their sum in binary. 
    The conversion can be done before, or after the addition.

    The binary number returned should be a string.  
*/

/* Solution */

function addBinary(a,b) {
    const sum = a + b;
    const decimalToBinary = (input) => {
      if (input === 0 || input === 1) {
        return String(input);
      } else {
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
      }
    };
    const binarySum = decimalToBinary(sum);
    return binarySum;
}