/*
    Description:

    Snail Sort

    Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

    array = [[1,2,3],
            [4,5,6],
            [7,8,9]]
    snail(array) #=> [1,2,3,6,9,8,7,4,5]
    For better understanding, please follow the numbers of the next array consecutively:

    array = [[1,2,3],
            [8,9,4],
            [7,6,5]]
    snail(array) #=> [1,2,3,4,5,6,7,8,9]
    
*/

/* Solution */

snail = function(array) {
    if (array.flat().length == 0) return []
    if (array.flat().length == 1) { return array[0] } 
  
    
    let snailArr = []
    let rows = array.length
    let cols = array[0].length
    
    
    // get first row
    const getTopRow = (startRow, startCol, endCol) => {
      let els = []
      for ( let i = startCol; i <= endCol; i++ ) {
        els.push(array[startRow][i])
      }
      return els
    }
    
    // get last column
    const getLastCol = (startCol, startRow, endRow) => {
      let els = []
      for ( let j = startRow; j <= endRow; j++ ) {
        els.push(array[j][startCol])
      }
      return els
    }
    
    // get bottom row
    const getBottomRow = (startRow, startCol, endCol) => {
      let els = []
      for ( let k = startCol; k >= endCol; k-- ) {
        els.push(array[startRow][k])
      }
      return els
    } 
  
    // get first column
    const getFirstColumn = (startCol, startRow, endRow) => {
      let els = []  
      for ( let l = startRow; l >= endRow; l-- ) {
         els.push(array[l][startCol])
      }
      return els
    }
    
    let topRow = 0;
    let bottomRow = rows - 1;
    let firstCol = 0;
    let lastCol = array[0].length-1
    
    // works with odd number of rows x cols
    if (rows % 2 != 0) {
      while (topRow != bottomRow && lastCol != firstCol) {
        snailArr.push(getTopRow(topRow, firstCol, lastCol))
        topRow++
        snailArr.push(getLastCol(lastCol, topRow, bottomRow))
        lastCol--
        snailArr.push(getBottomRow(bottomRow, lastCol, firstCol))
        bottomRow--
        snailArr.push(getFirstColumn(firstCol, bottomRow, topRow))
        firstCol++
      }
      snailArr.push(array[topRow][firstCol])
    }
    
    if (rows % 2 == 0) {
      while (topRow <= rows / 2 && lastCol >= cols / 2) {
        snailArr.push(getTopRow(topRow, firstCol, lastCol))
        topRow++
        snailArr.push(getLastCol(lastCol, topRow, bottomRow))
        lastCol--
        snailArr.push(getBottomRow(bottomRow, lastCol, firstCol))
        bottomRow--
        snailArr.push(getFirstColumn(firstCol, bottomRow, topRow))
        firstCol++
      }
    }
    
    return snailArr.flat()
  }