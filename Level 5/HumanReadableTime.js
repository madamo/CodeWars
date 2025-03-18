/*
    Description:

    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.
    
*/

/* Solution */

function humanReadable (seconds) {
    let hours = 0
    let mins = 0
    
    const formatTime = (time) => {
      if (time < 10) {
        return `0${time}`
      } else {
        return time.toString()
      }
    }
    
    if (seconds === 0) {
      return "00:00:00"
    }
  
    if (seconds < 60) {
      return `00:00:${seconds}`
    }
    
    // get mins
    if (seconds >= 60) {
      mins = Math.floor(seconds / 60).toString()
      seconds = seconds - (mins * 60);
    }
    
    // get hours
    if (mins >= 60) {
      hours = Math.floor(mins/60).toString()
      mins = mins - (hours * 60)
    }
    
    return `${formatTime(hours)}:${formatTime(mins)}:${formatTime(seconds)}`;
  }