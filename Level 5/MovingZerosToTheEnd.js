/*
    Description:

    Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

/* Solution */

function moveZeros(arr) {
    let numZeros = 0;
    
    for (let j = arr.length; j >= 0; j--) {
      if (arr[j] === 0) {
        arr.splice(j, 1)
        numZeros++
      }
    }
    
    for (let i = 0; i < numZeros; i++) {
      arr.push(0);
    }
   
    return arr
}