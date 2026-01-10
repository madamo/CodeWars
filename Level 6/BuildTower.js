/* Description */

/* Solution */
function towerBuilder(nFloors) {
  let tower = []
  let floor = ""
  for (let i = nFloors; i > 0; i--) {
    console.log("i:", i)
    for (let j = 0; j < (nFloors * 2) - 1; j++) {
      console.log("j", j)
      if (i < nFloors && j !== 2) {
        floor += " "
      } else {
        floor += "*"

      }
      console.log("floor", floor)

    }
    
    tower.unshift(floor)
    floor = ""
  }
  
  console.log("tower", tower)
  return tower
}