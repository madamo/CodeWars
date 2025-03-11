/* 
    Description:

    Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

    Examples

    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !

*/

/* Solution */

function pigIt(str){
    const words = str.split(" ")
    let pigLatinArr = []
  
  
    words.forEach((word) => {
      if (word.match(/\W/)) {
        pigLatinArr.push(word)
      } else {
        let firstLetter = word.slice(0,1);
        let pigLatin = word.slice(1) + firstLetter + "ay"
        pigLatinArr.push(pigLatin)
      }
  
    })
    
    return pigLatinArr.toString().split(",").join(" ")
    
  }