/* Description
  Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

*/

/* Solution */
function towerBuilder(nFloors) {
  let tower = []
  let floor = ""
  let pad = 0
  for (let i = nFloors; i > 0; i--) {
    for (let j = 1; j < (nFloors * 2); j++) {
      if (i === nFloors) {
        floor += "*"
      } else if (j <= pad || j >= (nFloors * 2) - pad) {
        floor += " "
      }
      else {
        floor += "*"
      }
    }
    
    tower.unshift(floor)
    floor = ""
    pad++
  }
  
  return tower
  
}
