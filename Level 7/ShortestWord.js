/*
  
  Description:
  Simple, given a string of words, return the length of the shortest word(s).

  String will never be empty and you do not need to account for different data types. 

*/

/* Solution */

function findShort(s){
  let words = s.split(" ")
  let lengths = words.map(word => word.length)
  return Math.min(...lengths)
}