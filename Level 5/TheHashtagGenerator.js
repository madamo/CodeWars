/*
    Description:

    The marketing team is spending way too much time typing in hashtags.
    Let's help them with our own Hashtag Generator!

    Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

*/

/* Solution */

function generateHashtag (str) {
    if (!str) return false // make sure there's a string
    
    let re = /^\s+$/g
    if (str.match(re)) return false // make sure it's not just whitespace
    
    // remove extra spaces and split into words
    let spacesRegEx = /\s{2,}/g
    let cleanStr = str.replace(spacesRegEx, " ")
    let words = cleanStr.split(" ");
    
    // capitalize first letter of each word if it's a valid string
    let hashedWords = words.map((word) => {
      if (word[0]) {
        if (word[0].match("/[^\w]/")) return word
        let firstLetter = word[0].toUpperCase()
        word = word.substring(1);
        word = `${firstLetter}${word}`
        return word;
      } else {
        return ""
      }
    })
    
    hashedWords.unshift("#") // add a #
    
    let hashtag = hashedWords.toString().split(",").join("")
    
    if ( hashtag.length <= 140 ) { // check the length
      return hashtag
    } else {
      return false
    }
}