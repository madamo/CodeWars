/*
    Description: 
    
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

/* Solution */
function isIsogram(str){
    let count = {}
    
    for (let i=0; i < str.length; i++) {
      count[str[i].toLowerCase()] = count[str[i].toLowerCase()] ? count[str[i].toLowerCase()] + 1 : 1
    }
    
    
    for (const val of Object.values(count)) {
      if (val > 1) {
        return false
      }
    }
    
    return true
    
  }