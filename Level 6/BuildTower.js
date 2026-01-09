/* Description */

/* Solution */

function towerBuilder(nFloors) {
  let tower = []
  let floor = ""
  for (let i = nFloors; i > 0; i--) {
    console.log("i:", i)
    for (let j = 0; j < (i * 2) - 1; j++) {
      console.log("j", j)
      console.log("floor", floor)
      
      floor += "*"
    }
    tower.unshift(floor)
    floor = ""
  }
  
  console.log("tower", tower)
  return tower
}