/*

    Description:

    The principal of a school likes to put challenges to the students related with finding words of certain features. One day she said: "Dear students, the challenge for today is to find a word that has only one vowel and seven consonants but cannot have the letters "y" and "m". I'll give a special award for the first student that finds it." One of the students used his dictionary and spent all the night without sleeping, trying in vain to find the word. The next day, the word had not been found yet. This student observed that the principal has a pattern in the features for the wanted words:

    The word should have n vowels, may be repeated, for example: in "engineering", n = 5.

    The word should have m consonants, may be repeated also: in "engineering", m = 6.

    The word should not have some forbidden letters (in an array), forbid_letters

    You will be provided with a list of words, WORD_LIST(python/crystal), wordList(javascript), wordList (haskell), $word_list(ruby), and you have to create the function, wanted_words(), that receives the three arguments in the order given above, wanted_words(n, m, forbid_list)and output an array with the word or an array, having the words in the order given in the pre-loaded list, in the case of two or more words were found.

    Let's see some cases:

    wantedWords(1, 7, ["m", "y"]) == ["strength"]
    wantedWords(3, 7, ["m", "y"]) == ['afterwards', 'background', 'photograph', 'successful', 'understand']
    For cases where no words are found the function will output an empty array.

    wantedWords(3, 7, ["a", "s" , "m", "y"]) == []
    Help our student to win this and the next challenges of the school. He needs to sure about a suspect that he has. That many times there are no solutions for what the principal is asking for. All words have its letters in lowercase format. Enjoy it!
*/

/* Solution */

function wantedWords(n, m, forbid_let){
    const vowels = /a|e|i|o|u/g
    const consonants = /b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z/g
    let forbidden = forbid_let.join("|")
    const forbiddenRe = new RegExp(`${forbidden}`, "g")
    
    //let re = /m|y/g
  
    let matchingWords = []
    
    for (const word of wordList) {
      if (word.match(forbiddenRe)) {
      } else if ((word.match(vowels) || []).length == n && (word.match(consonants) || []).length == m) {
        matchingWords.push(word)
      }
    }
    
    return matchingWords;
  }