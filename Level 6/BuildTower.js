/* Description */

/* Solution */
function towerBuilder(nFloors) {
  let tower = []
  let floor = ""
  let left = 0
  let right = 0
  let pad = 0
  console.log('nFloors:', nFloors)
  for (let i = nFloors; i > 0; i--) {
    console.log("i:", i)
    for (let j = 0; j < (nFloors * 2) - 1; j++) {
      console.log("j", j)
      console.log("pad:", pad)
      if (i === nFloors) {
        floor += "*"
      } else if (j < pad || j >= (nFloors * 2) - pad*2) {
        floor += " "
      }
      else {
        floor += "*"
      }

      console.log("floor", floor)

    }
    
    tower.unshift(floor)
    floor = ""
    pad++
  }
  
  console.log("tower", tower)
  return tower
}