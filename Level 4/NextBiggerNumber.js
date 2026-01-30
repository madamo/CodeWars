/* Description */

/* Solution */

function nextBigger(n){
  console.log(n.toString())
  const numString = n.toString()
  const digitArr = numString.slice(-(numString.length)).split("")
  let biggerStr = ""
  
  if (digitArr[0] < digitArr[1]) {
    console.log('bigger')
    biggerStr += digitArr[1] + digitArr[0]
  }
  
  return parseInt(biggerStr)
}