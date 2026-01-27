/* Description */

/* Solution */

function zero() {
  return 0
}
function one() {
  return 1
}
function two() {
  return 2
}
function three() {
  return 3
}
function four() {
  return 4
}
function five(x=5) {
  console.log('five param=', x)
  return x
}
function six() {
  return 6
}
function seven(x) {
  console.log('seven param=', x)
  return x(7)
}
function eight() {
  return 8
}
function nine() {
  return 9
}

function plus(x, y) {
  return x + y
}
function minus() {}
function times(x) {
  console.log('times param:', x)
  return (y) => { 
      console.log('x', x)
      return x * y
    }
}
function dividedBy() {}
