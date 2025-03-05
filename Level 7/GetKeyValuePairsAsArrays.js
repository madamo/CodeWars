/*
    Description:

    Complete the keysAndValues function so that it takes in 
    an object and returns the keys and values as separate arrays.
    
*/

/* Solution */

function keysAndValues(data){
    let arr = [];
    arr.push(Object.keys(data));
    arr.push(Object.values(data));
    
    return arr;
}