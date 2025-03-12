/* 
    
    Description:

    You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

*/

/* Solution */

function isValidWalk(walk) {
    let route = {}
    let roundTrip = false;
      
    // if there are not 10 steps, it's not 10 minutes so fals
    if (walk.length != 10) {
      return false
    } else {
      // find how many steps in each direction
      for (let i = 0; i < walk.length; i++) {
        if (route[walk[i]]) {
          route[walk[i]]++
        } else {
          route[walk[i]] = 1
        }
      }
      
      for (const key in route) {
        switch (key) {
            case 'n':
              if (route.n === route.s) {
                roundTrip = true
              } else {
                roundTrip = false
                return roundTrip
              }
            break;
            
            case 's':
              if (route.s === route.n) {
                roundTrip = true
              } else {
                roundTrip = false
                return roundTrip
              }
            break;
            
            case 'e':
              if (route.e === route.w) {
                roundTrip = true
              } else {
                roundTrip = false
                return roundTrip
              }
              break;
            
            case 'w':
              if (route.w === route.e) {
                roundTrip = true
              } else {
                roundTrip = false
                return roundTrip
                break;
              }
        }
      }
      return roundTrip
    }
  }