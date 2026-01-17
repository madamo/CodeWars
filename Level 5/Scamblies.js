/* Description &/
  Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

  Only lower case letters will be used (a-z). No punctuation or digits will be included.
  Performance needs to be considered.
/* Solution */

function scramble(str1, str2) {

  let str1Arr = str1.split("")
  let str2Arr = str2.split("")
  let str1CharCount = {}
  let str2CharCount = {}
  for (let char of str1Arr) {
    str1CharCount[char] = (str1CharCount[char] || 0) + 1
  }
  
  for (let char of str2Arr) {
    str2CharCount[char] = (str2CharCount[char] || 0) + 1
  }
  
  let contains = false
  
  for (let key of Object.keys(str2CharCount)) {
    if (!str1CharCount[key]) {
      return false
    }
    if (str1CharCount[key] >= str2CharCount[key]) {
      contains = true
    } else {
      return false
    }
  }
  
  return contains
}