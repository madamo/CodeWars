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
  
  for (let i = digitArr.length; i >= 0; i--) {
    console.log(i, digitArr[i])
    if (digitArr[i] > digitArr[i-1]) {
      console.log('bigger')
      newArr.splice(i-1, 2, digitArr[i], digitArr[i-1])
      
      console.log(newArr)

      return parseInt(newArr.join(""))
      //biggerStr += digitArr[i+1] + digitArr[i]

    }

  }

}
