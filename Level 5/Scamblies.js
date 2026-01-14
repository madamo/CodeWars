/* Description &/

/* Solution */

function scramble(str1, str2) {
  console.log("str1", str1)
  console.log("str2", str2)
  let contains = false
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      contains = true
    } else {
      return false
    }
  }
  return contains;
}