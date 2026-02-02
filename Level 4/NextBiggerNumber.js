/* Description */

/* Solution */

// if value of 1s is greater than value of 10s, swap digits
// else if equal or less than, check if 10s is greater than 100s and so on

function nextBigger(n){
  console.log(n.toString())
  const numString = n.toString()
  const digitArr = numString.slice(-(numString.length)).split("")
  let biggerStr = ""
  
  for (let i = 0; i < digitArr.length; i++) {
    if (digitArr[i] < digitArr[i+1]) {
      console.log('bigger')
      biggerStr += digitArr[i+1] + digitArr[i]
    }
  }

  
  return parseInt(biggerStr)
}
