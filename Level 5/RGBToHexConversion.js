/*
    Description: 
    The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

/* Solution */

function rgb(r, g, b) {
  
    if (r <= 0 && g <= 0 && b <= 0) {
      return "000000"
    }
    
    for (const arg in arguments) {
      if (arguments[arg] > 255) arguments[arg] = 255;
      if (arguments[arg] < 0) arguments[arg] = 0;
    };
      
    const toHex = (num) => {
      let hex = num % 16;
      if (num - hex === 0) {
        return toChar(hex)
      }
      
      return toHex((num-hex) / 16) + toChar(hex)
    }
    
    const toChar = (n) => {
      const chars = "0123456789ABCDEF"
      return chars.charAt(n)
    }
    
    let hexCodeR = ""
    let hexCodeG = ""
    let hexCodeB = ""
  
  
    if (r > 0 ) {
      hexCodeR = toHex(r)
    } else {
      hexCodeR = "00"
    }
    
    if (hexCodeR.length < 2) {
      hexCodeR = "0" + hexCodeR
    }
    
    if (g > 0 ) {
      hexCodeG = toHex(g)
    } else {
      hexCodeG = "00"
    }
    
    if (hexCodeG.length < 2) {
      hexCodeG = "0" + hexCodeG
    }
    
    
    if (b > 0 ) {
      hexCodeB = toHex(b)
    } else {
      hexCodeB = "00"
    }
    
    if (hexCodeB.length < 2) {
      hexCodeB = "0" + hexCodeB
    }
    
    return hexCodeR + hexCodeG + hexCodeB;
  }