/* Description &/

/* Solution */

function scramble(str1, str2) {
  //console.log("str1", str1)
  //console.log("str2", str2)
  let str1Arr = str1.split("")
  let str1CharCount = {}
  for (let char of str1Arr) {
    str1CharCount[char] = (str1CharCount[char] || 0) + 1
  }
  
  console.log(str1CharCount)
  
  /*
  
      for (let word of filteredList) { 
      wordCount[word] = (wordCount[word] || 0) + 1
    }
       if (charSeen[char]) {
        charSeen[char]++
      } else {
        charSeen[char] = 1;
      }
    })
  */
  
  let contains = false
  for (let i = 0; i < str2.length; i++) {
    //console.log(str2[i])
    //let re = new RegExp(String.raw`${str2[i]}`, "g")
    if (!str1.match(str2[i])) {
      return false
    }
    let str1Count = str1.split(str2[i]).length
    let str2Count = str2.split(str2[i]).length
    //console.log(str1Count)
    //console.log(str2Count)
    //console.log(re)
    if ( str1Count >= str2Count ) {
      //console.log(`str1: ${(str1.match(re) || []).length} str2: ${(str2.match(re) || []).length}`)
      contains = true
    } else {
      return false
    } 
  }
  return contains;
}