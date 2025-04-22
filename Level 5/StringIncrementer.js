/*
    Description:

    Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    Examples:

    foo -> foo1

    foobar23 -> foobar24

    foo0042 -> foo0043

    foo9 -> foo10

    foo099 -> foo100

    Attention: If the number has leading zeros the amount of digits should be considered.
*/

/* Solution */

function incrementString (strng) {
    // Check if string ends in a digit
    const re = /([0-9])+$/
    
    const found = strng.match(re)
    
    // If no digit, add 1
    if (!found) {
      return strng + "1"
    }
    
    // Increment the value of the string by 1 
    const value = parseInt(found[0]) + 1
    const valStr = value.toString()
    
    // Break the string into an array
    let strArray = strng.split("")
    
    // If there are no leading 0s, insert the incremented string
    if (found[0][0] != "0") {
      strArray.splice(found.index, found[0].length, valStr)
  
    } else if (found[0][0] === "0" && strArray.lastIndexOf("0") === strArray.length-1) {      
  
      strArray.splice(strArray.length-1, valStr.length, valStr)          
    } else {
        strArray.splice(strArray.length-valStr.length, valStr.length, valStr)          
    }
    return strArray.join("")
    
  }