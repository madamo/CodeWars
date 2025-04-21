/*

*/

/* Solution */

function solution(text, markers) {
    console.log(`text: ${text}`)
    console.log(`markers: ${markers}`)
    
    if (markers.length === 0) {
      return text.trimEnd()
    }
  
    // find all indices of marker
    let markerIdx = []
    let newLines = []
    for (const marker of markers) {
      for (let i = 0; i < text.length; i++) {
        if (text[i] === marker) markerIdx.push(i)
        if (text[i] === "\n") newLines.push(i)
      }
    }
    
    if (markerIdx.length < 1) {
      return text
    }
    
    console.log(`markerIdx: ${markerIdx.length} newLines: ${newLines.length}`)
  
    let newText = ""
    for (let j = 0; j < markerIdx.length; j++) {
      let comment = text.substring(markerIdx[j], newLines[j])
      console.log(`comment: ${comment}`)
      newText = text.replace(comment, "")
    }
    
    console.log(`stripped text: ${newText}`)
    return newText.trimEnd()
  
  
    /*
    console.log(`newText: ${newText}`)
    return newText.trimEnd()*/
  }