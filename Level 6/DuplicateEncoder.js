/*
    Description:

    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 

*/

/* Solution */

function duplicateEncode(word){

    if (word === "") {
      return ""
    }
    
    let charArray = word.toLowerCase().split("")
    let charSeen = {}
    let encodedStr = "";
    
    
    charArray.map((char) => {
     if (charSeen[char]) {
        charSeen[char]++
      } else {
        charSeen[char] = 1;
      }
    })
      
   charArray.forEach((char) => {
      if (charSeen[char] > 1 ) {
        encodedStr += ")"
      } else {
        encodedStr += "("
      }
    })
    
    return encodedStr;
}