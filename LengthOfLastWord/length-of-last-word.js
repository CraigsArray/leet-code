/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    if (s.length === 0) return; //edge case
    
    let lastWord = "";
    for (let i = s.length - 1; i >= 0; i--){ //start from the end
        if(s[i] !== " ") lastWord += s[i]; //build our last word backwards
        if(s[i] === " " && lastWord !== "") break; //once we started filling up our word and encounter another, break
    }
    return lastWord.length;
};