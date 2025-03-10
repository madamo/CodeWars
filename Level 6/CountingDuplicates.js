/*
    Description:

    Count the number of Duplicates

    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example

    "abcde" -> 0  # no characters repeats more than once
    "aabbcde" -> 2  # 'a' and 'b'
    "aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1  # 'i' occurs six times
    "Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2  # 'a' and '1'
    "ABBA" -> 2  # 'A' and 'B' each occur twice

*/

/* Solution */

function duplicateCount(text){
    if (text === "") {
      return 0
    }
    
    let textArr = text.toLowerCase().split("")
    let charSeen = {}
    let dupeCount = 0;
    
    
    textArr.map((char) => {
     if (charSeen[char]) {
        charSeen[char]++
      } else {
        charSeen[char] = 1;
      }
    })
    
   Object.keys(charSeen).forEach((key) => {
      if (charSeen[key] > 1 ) {
        dupeCount++
      }
    })
    
    return dupeCount;
}