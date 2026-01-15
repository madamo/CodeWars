/* Description &/

/* Solution */

function scramble(str1, str2) {
  //console.log("str1", str1)
 // console.log("str2", str2)
  let contains = false
  for (let i = 0; i < str2.length; i++) {
    //console.log(str2[i])
    let re = new RegExp(String.raw`${str2[i]}`, "g") 
    //console.log(re)
    if ( (str1.match(re) || []).length >= (str2.match(re) || []).length ) {
      //console.log(`str1: ${(str1.match(re) || []).length} str2: ${(str2.match(re) || []).length}`)
      contains = true
    } else {
      return false
    } 
  }
  return contains;
}