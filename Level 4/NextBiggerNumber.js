/* Description */

/* Solution */

// if value of 1s is greater than value of 10s, swap digits
// else if equal or less than, check if 10s is greater than 100s and so on

function nextBigger(n){
  console.log(n.toString())
  const numString = n.toString()
  const digitArr = numString.slice(-(numString.length)).split("")
  let biggerStr = ""
  let newArr = digitArr.slice()
  
  for (let i = 0; i < digitArr.length; i++) {
    console.log(digitArr[i])
    if (digitArr[i] < digitArr[i+1]) {
      console.log('bigger')
      newArr.splice(i, 2, digitArr[i+1], digitArr[i])
      
      //biggerStr += digitArr[i+1] + digitArr[i]
    }
  }

  console.log(newArr)
  
  return parseInt(newArr.join(""))
}
