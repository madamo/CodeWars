/* 
    Description:

    Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:

A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
*/

/* Solution */

function topThreeWords(text) {
    // Split the text, remove whitespace and extraneous characters
    let wordArr = text.toLowerCase().split(" ")
    const re = /\w+/
    const remove = /\/\//g
    let filteredList = wordArr.filter((word) => re.test(word))
    filteredList = filteredList.map((word) => word.replace(remove, ""))
  
    // Count number of occurences of each word
    let wordCount = {}
      
    for (let word of filteredList) { 
      wordCount[word] = (wordCount[word] || 0) + 1
    }
    
    // Find the top 3 (or less) words
    
    let freqWords = []
    const topValues = Object.values(wordCount).sort((a,b) => b - a )
    
    for (let i = 0; i < 3; i++ ) {
      let topWord = Object.keys(wordCount).find((key) => wordCount[key] === topValues[i])
      if (topWord) {
        freqWords.push(topWord)
      }
    }
    
    return freqWords
    
  }