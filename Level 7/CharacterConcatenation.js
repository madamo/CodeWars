/*
    Description:

    Given a string, you progressively need to concatenate the first character from the 
    left and the first character from the right and "1", then the second character from 
    the left and the second character from the right and "2", and so on.

    If the string's length is odd drop the central element.

*/


/* Solution */

function charConcat(string){
    let newString = "";
    if (string.length % 2 === 0) {
      for (let i = 0; i < string.length / 2; i++) {
        newString += string[i] + string[string.length - (i + 1)] + (i + 1);
      }
    } else if (string.length % 2 === 1) {
      const cleanStr =
        string.slice(0, Math.floor(string.length / 2)) +
        string.slice(Math.floor(string.length / 2) + 1);
      for (let i = 0; i < cleanStr.length / 2; i++) {
        newString += cleanStr[i] + cleanStr[cleanStr.length - (i + 1)] + (i + 1);
      }
    }
    return newString;
  }