/* Description 
  This time we want to write calculations using functions and get the results. Let's have a look at some examples:

  seven(times(five()));   //  must return 35
  four(plus(nine()));     //  must return 13
  eight(minus(three()));  //  must return 5
  six(dividedBy(two()));  //  must return 3
  Requirements:

  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:

*/

/* Solution */

function zero(x = () => 0) {
  return x(0)
}
function one(x = () => 1) {
  return x(1)
}
function two(x = () => 2) {
  return x(2)
}
function three(x = () => 3) {
  return x(3)
}
function four(x = () => 4) {
  return x(4)
}
function five(x = () => 5) {
  return x(5)
}
function six(x = () => 6) {
  return x(6)
}
function seven(x = () => 7) {
  return x(7)
}
function eight(x = () => 8) {
  return x(8)
}
function nine(x = () => 9) {
  return x(9)
}

function plus(x) {
  return (y) => x + y
}
function minus(x) {
  return (y) => y - x
}
function times(x) {
  return (y) => x * y
}
function dividedBy(x) {
  return (y) => Math.floor(y / x)
}