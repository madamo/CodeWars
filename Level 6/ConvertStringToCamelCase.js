/*
  Description:

  Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

  Examples

  "the-stealth-warrior" gets converted to "theStealthWarrior"

  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

  "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/

/* Solution */

function toCamelCase(str){
    if (str === "") {
      return str
    }
    const re = /-|_/
    let strArray = str.split(re)
    for (let i = 1; i < strArray.length; i++) {
      strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1)
    }
    
    return strArray.join("")
  
  }