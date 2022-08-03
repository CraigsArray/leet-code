var longestCommonPrefix = function(strs) {
    if(strs.length < 2) { //Edge case - only 1 string input
        return strs[0];
    }
    const matchStrings = function(str1, str2){
        let matched = "";
        let counter = 0;
        while(counter < str1.length || counter < str2.length) {
            if(str1[counter] === str2[counter]) {
                matched += str1[counter];
                counter++;
            } else {
                break;
            }
        }
        return matched;
    }
    //Set up a base common prefix which we will build upon
    let base = matchStrings(strs[0], strs[1]);
    if(strs.length ===2) {
        return base;
    }
    let result = "";
    for(let i = 2;i < strs.length;i++) { 
        result = matchStrings(base, strs[i]);
        //update the base common prefix on every iteration
        base = matchStrings(base, strs[i])
    }
    return result;
};