/*
    Description:
    
    Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) 
    passed in and generates a human readable string from its key/value pairs.

    The format should be "KEY = VALUE". Each key/value pair should be separated 
    by a comma except for the last pair.
*/

/* Solution */

function solution(pairs){
    let result = "";

    Object.keys(pairs).forEach((key) => {
      result += `${key} = ${pairs[key]},`;
    });

    return result.slice(0, result.length - 1);
}