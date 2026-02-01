/* Description */

/* Solution */

// if value of 1s is greater than value of 10s, swap digits
// else if equal or less than, check if 10s is greater than 100s and so on

function nextBigger(n){
  console.log(n.toString())
  const numString = n.toString()
  const digitArr = numString.slice(-(numString.length)).split("")
  let biggerStr = ""
  
  //TO-DO: loop through entire array
  if (digitArr[0] < digitArr[1]) {
    console.log('bigger')
    biggerStr += digitArr[1] + digitArr[0]
  }
  
  return parseInt(biggerStr)
}
