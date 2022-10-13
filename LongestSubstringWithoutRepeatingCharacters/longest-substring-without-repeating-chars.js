/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) return 0;  //edge case
    if (s.length === 1) return 1;  //edge case
    if (s.length === 2 && s[0] !== s[1]) return 2; //edge case
    let map = {};
    let subString = "";
    let j = 0;
    
   
    for(let i = 0; i < s.length; i++){
        if(subString.includes(s[i])){
            map[subString.length] = subString;
            j++;
            i = j;
            subString = s[i];
        }
        else{
            subString += s[i];
        }

    }
    map[subString.length] = subString
    let ansArray = Object.keys(map);
    let longest = parseInt(ansArray[ansArray.length - 1])
    return longest;
    
};