/*
    Description:

    Welcome.

    In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example

    Input = "The sunset sets at twelve o' clock."
    Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

/* Solution */

function alphabetPosition(text) {
  
    const alphabet = {
      "a": "1",
      "b": "2",
      "c": "3",
      "d": "4",
      "e": "5",
      "f": "6",
      "g": "7",
      "h": "8",
      "i": "9",
      "j": "10",
      "k": "11",
      "l": "12",
      "m": "13",
      "n": "14",
      "o": "15",
      "p": "16",
      "q": "17",
      "r": "18",
      "s": "19",
      "t": "20",
      "u": "21",
      "v": "22",
      "w": "23",
      "x": "24",
      "y": "25",
      "z": "26"
    }

    let charArray = text.split("");
    
    let codedArray = charArray.filter((char) => alphabet[char.toLowerCase()]).map((char) => alphabet[char.toLowerCase()])
    
    return codedArray.toString().split(",").join(" ")
  }