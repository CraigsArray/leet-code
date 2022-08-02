var longestCommonPrefix = function(strs) {
    //Base check 
    if(strs.length < 2) {
        return strs[0];
    }
    //helper function which return the common prefix between two
    const matchTwoStr = (str1,str2)=>{
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
    let base = matchTwoStr(strs[0], strs[1]);
    if(strs.length ===2) {
        return base;
    }
    let result = "";
    for(let i = 2;i < strs.length;i++) { 
        result = matchTwoStr(base, strs[i]);
        //update the base common prefix on every iteration
        base = matchTwoStr(base, strs[i])
    }
    return result;
};