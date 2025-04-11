/* 
    Description:

    Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

    * 'abc' =>  ['ab', 'c_']
    * 'abcdef' => ['ab', 'cd', 'ef']
*/

/* Solution */

function solution(str){
    if (str === "") {
        return []
    }

    if (str.length === 1) {
        return [str+"_"]
    }   

    const re = /(\w{2})/g

    let pairs = str.match(re)

    if (str.length % 2 != 0) {
        pairs.push(str[str.length-1]+"_")
    }
 
    return pairs
}