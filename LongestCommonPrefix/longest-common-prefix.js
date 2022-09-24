/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

var longestCommonPrefix = function(strs) {
    if(strs.length < 2) { //Edge case - only 1 string input
        return strs[0];
    }
    const matchStrings = function(str1, str2){ //comparing 2 strings
        let matched = "";
        let counter = 0;
        while(counter < str1.length || counter < str2.length) {  //search through strings
            if(str1[counter] === str2[counter]) {
                matched += str1[counter];
                counter++;
            } else {
                break;
            }
        }
        return matched;
    }
    //Set up a base common prefix from first 2 strings which we will build upon
    let base = matchStrings(strs[0], strs[1]);
    if(strs.length ===2) { //if there was only 2 strings, return early
        return base;
    }
    let result = "";
    for(let i = 2;i < strs.length;i++) { 
        base = matchStrings(base, strs[i])
    }
    return result;
};