/*
  Description:

  Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

  "This is an example!" ==> "sihT si na !elpmaxe"
  "double  spaces"      ==> "elbuod  secaps"
*/

/* Solution */

function reverseWords(str) {
  const words = str.split(' ')
  return(words.map(w => w.split('').reverse().join('')).join(' '))
}