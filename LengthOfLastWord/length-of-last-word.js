/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    if (s.length === 0) return; //edge case
    
    let locationOfLastSpace = 0;
    for (let i = 0; i < s.length; i++){
        if(s[i] === " ") locationOfLastSpace = i;
    }
    return s.length - locationOfLastSpace;
};