/*
    Description:

    Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:

    * For seconds = 62, your function should return 
        "1 minute and 2 seconds"
    * For seconds = 3662, your function should return
        "1 hour, 1 minute and 2 seconds"
    For the purpose of this Kata, a year is 365 days and a day is 24 hours.

    Note that spaces are important.

    Detailed rules

    The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

    The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

    A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

    Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

    A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

    A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

*/

/* Solution */

function formatDuration (seconds) {
  
    if (seconds == 1) {
      return '1 second'
    }
    
    if (seconds === 0) {
      return "now"
    }
    
    // check for years and days first, subtract from seconds
    
    const secondsInYear = 31536000
    const secondsInDay = 86400
    let years = 0
    let days = 0
  
    if (seconds > secondsInYear) {
      years = Math.floor(seconds / secondsInYear)
      seconds = seconds - (years * secondsInYear)
    }
    
    if (seconds > secondsInDay ) {
      days = Math.floor(seconds / secondsInDay)
      seconds = seconds - (days * secondsInDay)
    }
        
    // recursively calculate hours, mins, seconds
    const getHours = (num) => {
      //console.log("num: " + num)
      let r = num % 60;
      //console.log("r:" + r)
      if (num < 60) {
        return String(r)
      }
      return getHours(Math.floor(num / 60)) + " " + String(r)
    }
    
    // format hours, mins, seconds
    const formatString = (str) => {
      let splitTime = str.split(" ")
      let secStr = ""
      let minStr = ""
      let hourStr = ""
    
      switch (splitTime.length) {
        case 1:
          secStr = splitTime[0] === "0" ? "" : splitTime[0] > 1 ? "seconds" : "second"
          return `${splitTime[0]} ${secStr}`
        case 2:
          //secStr = splitTime[1] > 1 ? "seconds" : "second"
          secStr = splitTime[1] === "0" ? "" : splitTime[1] > 1 ? `${splitTime[1]} seconds` : `${splitTime[1]} second`
          minStr = splitTime[0] > 1 ? "minutes," : "minute,"
          return `${splitTime[0]} ${minStr}${secStr}`
        case 3:
          secStr = splitTime[2] === "0" ? "" : splitTime[2] > 1 ? `${splitTime[2]} seconds` : `${splitTime[2]} second`
          minStr = splitTime[1] === "0" ? "" : splitTime[1] > 1 ? `${splitTime[1]} minutes,` : `${splitTime[1]} minute,`
          hourStr = splitTime[0] > 1 ? "hours," : "hour,"
          return `${splitTime[0]} ${hourStr}${minStr}${secStr}`
      }
    }
    
    // get the hours, mins, seconds and format the result
    let hoursMinsSecs = getHours(seconds)
    let formattedHMS = formatString(hoursMinsSecs)
    
    // format the year, day result if it exists
    let yearStr = years === 0 ? "" : years > 1 ? `${years} years,` : `${years} year,`
    let dayStr = days === 0 ? "" : days > 1 ? `${days} days,` : `${days} day,`
    
    // combine years, days, hours, mins, seconds
    let duration = yearStr + dayStr + formattedHMS
    
    // format the combined duration
    const formatDuration = (durationStr) => {
      let strArr = durationStr.split(",").filter((el) => el != "")
      if (strArr.length > 1) {
        strArr[strArr.length-1] = " and " + strArr[strArr.length-1]
      }
      
      for (let i = 0; i < strArr.length-2; i++ ) {
          strArr[i] += ", "
      }
    
      return strArr.join("")
    }
      
    return formatDuration(duration)
    
  }
  