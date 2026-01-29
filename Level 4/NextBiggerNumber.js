/* Description */

/* Solution */

function nextBigger(n){
  //your code here
  console.log(n.toString())
  const numString = n.toString()
  console.log(numString.length)
  if (numString[numString.length - 2] < numString[numString.length-1]) {
    console.log('bigger')
  }
}