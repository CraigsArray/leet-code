/**
 * @param {string} s
 * @return {number}
 */
 //Runtime: O(n*logn)?
 //A bit on the slow side as we reset fully each time, creating overlap. Can be improved.
 var lengthOfLongestSubstring = function(s) {
    if (s.length < 1) return 0;  //edge case
    if (s.length === 1) return 1;  //edge case
    if (s.length === 2 && s[0] !== s[1]) return 2; //edge case
    let sizes = [];
    let substring = "";
    let j = 0;  //Holds the start index of current substring
    for(let i = 0; i < s.length; i++){
        if(substring.includes(s[i])){  //Repeat char
            sizes.push(substring.length); //Add curr substring length to array
            j++;    //Move start index up one
            i = j;  //Reset our i
            substring = s[i]; //Reset our substring
        }
        else{
            substring += s[i];
        }

    }
    sizes.push(substring.length);  //Add final substring length
    return Math.max(...sizes);  //return the max
};